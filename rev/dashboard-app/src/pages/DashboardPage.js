import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
import {Map, InfoWindow, Marker, GoogleApiWrapper,google} from 'google-maps-react';
import {Component,useState} from 'react';
import Card from '@material-ui/core/Card';
import { useCubeQuery } from '@cubejs-client/react';
import { makeStyles } from "@material-ui/styles";
import Table from "../components/TableUsage.js";
import "date-fns";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import withStyles from "@material-ui/core/styles/withStyles";
 import DateFnsUtils from "@date-io/date-fns";
 import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker
 } from "@material-ui/pickers";

 const AntTabs = withStyles({
  indicator: {},
})(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 25,
    fontSize: 12,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: 0,
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
    '&$selected': {
      fontWeight: theme.typography.fontWeightMedium,
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    marginTop: 15
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: 15
  },
  exportButton: {
    marginRight: 15
  },
  searchInput: {
    marginRight: 15
  },
  formControl: {
    margin: 25,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap"
  },
  date: {
    marginTop: 3
  },
  range: {
    marginTop: 13
  }
}));
class MapContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {

        startDate:{
          Date:"2013-07-01T00:00:00",
        },
        finishDate:{
          Date:"2014-07-01T00:00:00",
        },
        
        mapCenter:{
        id:"1385",
        lat: "-31.980773",
        lng: "115.816244",
        value:'',
        address:'',
        left:"273",
        right:"274",
        status1:'',
        status2:'',
        kwh1:'',
        kwh2:'',
        operation:'set',
      },

        showingInfoWindow: true,
        activeMarker:true,
      };
    }
    handleDateChange = (date) =>
    this.setState({
      startDate:{Date:date}
    });
    handleDateChangeFinish = (date) =>
    this.setState({
      finishDate:{Date:date}
    });
    onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
  
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: true,
          activeMarker: null
        })
      }
    };
  
  handleChange=(e)=> {
    let arr=e.target.value.split(',');
    this.setState({mapCenter:{id:arr[0],lat:arr[1],lng:arr[2],value:arr[3],address:arr[4],left:arr[5],
      right:arr[6],status1:arr[7],status2:arr[8],kwh1:arr[9],kwh2:arr[10],operation:arr[11]}});
    console.log(this.state.mapCenter);
  }
  
    render() {
      console.log(this.state.mapCenter);
      const RadioForm=()=> {
        const { resultSet, isLoading, error, progress } = useCubeQuery({
          measures: ['ChargingStations.count'],
          dimensions:[
            'ChargingStations.station_id',
            'ChargingStations.latitude',
            'ChargingStations.longtitude',
            'ChargingStations.organisation',
            'ChargingStations.address',
            'ChargingStations.station1',
            'ChargingStations.station2',
            'ChargingStations.status1',
            'ChargingStations.status2',
            'ChargingStations.totalKwh1',
            'ChargingStations.totalKwh2',
            'ChargingStations.operation',
          ],
          timeDimensions: [
            {
              dimension: 'ChargingStations.servertime1',
              dateRange: ["2012-04-04T00:00:00", "2012-04-06T00:00:00"],
            },
          ],
        });
        if (isLoading) {
          return <div>{progress?.stage || 'Loading...'}</div>;
        }
        if (error) {
          return <div>{error.toString()}</div>;
        }
        if (!resultSet) {
          return null;
        }
      const dataSource= resultSet.series().map((a) => { 
      return  <form value={this.state.mapCenter} onChange={this.handleChange}
      style={{left:'70%',position:'absolute'}}>
      {a.series.map((option) => {
         let arr=option.x.split(",");
         let newarr=[Number(arr[0]),Number(arr[1]),Number(arr[2]),arr[3],arr[4],Number(arr[5]),Number(arr[6]),
         arr[7],arr[8],Number(arr[9]),Number(arr[10]),arr[11]]
         let obj=Object.assign({},newarr)
     return <div >
        <input type="radio" 
          key={obj[0]} 
          checked={this.state.mapCenter.value === obj[3]} 
          value={[obj[0],obj[1],obj[2],obj[3],obj[4],obj[5],obj[6],obj[7],obj[8],obj[9],obj[10],obj[11]]}
           />
        <label style={{ font: '18px Arial',padding:'10px'}}>{obj[3]}</label>
      </div>})}
      </form>
      });
        return dataSource
          
    }

        const useStyles = makeStyles(theme => ({
          root: { padding: 15 },
          content: { marginTop: 15 },
        }));
        const query = {
          measures:[
            "UsageTime.plug_in_time",
            "UsageTime.charge_time",
            "UsageTime.maintain_time",
            "UsageEnergy.peak",
            "UsageEnergy.offpeak",
            "UsageEnergy.estimatedCostPeak",
            "UsageEnergy.estimatedCostOffPeak",
          ],
          dimensions:[
            
          ],
          timeDimensions: [
            {
              dimension: 'UsageTime.starttime',
              dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
            },
          ],
          filters: [    {
            "member": "UsageTime.stationId",
            "operator": this.state.mapCenter.operation,
            "values": [this.state.mapCenter.left,this.state.mapCenter.right]
          }],
          
          dimensions: [

          ],
        };
        const DashboardItems = [
          {
            id: 1,
            name: 'Energy Supply by Stations (/kWh)',
            vizState: {
              query: {
                measures: ['StationChargesAc1.kWh'],
                timeDimensions: [
                  {
                    dimension: 'StationChargesAc1.starttime',
                    dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
                  },
                ],
                order: {
                  'StationChargesAc1.kwh': 'desc',
                },
                limit: 5000,
                dimensions: ['ChargingStation.organisation'],
              },
              chartType: 'pie',
            },
          }, 
          {
            id: 2,
            name: 'Period Energy (/kWh)',
            vizState: {
              query: {
                measures: ['PeriodEnergy.energy'],
                timeDimensions: [
                  {
                    dimension: 'PeriodEnergy.starttime',
                    dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
                  },
                ],
                order: {
                  'PeriodEnergy.energy': 'desc',
                },
                filters: [    {
                  "member": "PeriodEnergy.stationId",
                  "operator": this.state.mapCenter.operation,
                  "values": [this.state.mapCenter.left,this.state.mapCenter.right]
                },
                // {and:[
                //   {
                //     "member": "PeriodEnergy.stationId",
                //     "operator": 'equals',
                //     "values": ['267','269','270','271','273','309','311','313','268','272','274','307','308','310','312','314']
                //   }
                // ],},
              ],
                dimensions: ['PeriodEnergy.period'],
              },
              chartType: 'pie',
            },
          },
          {
            id: 3,
            name: 'Energy Charging and Maintianing Charge by Week (/kWh)',
            vizState: {
              query: {
                measures: ['WeekCharge.energy', 'WeekMaintain.energy'],
                timeDimensions: [
                  {
                    dimension: 'WeekCharge.starttime',
                    dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
                  },
                ],
                order: [['WeekCharge.day_number', 'asc']],
                filters: [    {
                  "member": "WeekCharge.stationId",
                  "operator":this.state.mapCenter.operation,
                  "values": [this.state.mapCenter.left,this.state.mapCenter.right]
                },
                // {and:[
                //   {
                //     "member": "WeekCharge.stationId",
                //     "operator": 'equals',
                //     "values": ['267','269','270','271','273','309','311','313','268','272','274','307','308','310','312','314']
                //   }
                // ],},
              ],
                dimensions: ['WeekCharge.day_of_week', 'WeekCharge.day_number'],
              },
              chartType: 'bar',
            },
          },
          {
            id: 4,
            name: 'Time Charging and Maintianing Charge by Week (/h)',
            vizState: {
              query: {
                measures: ['WeekChargeHour.hours', 'WeekMaintainHour.hours'],
                timeDimensions: [
                  {
                    dimension: 'WeekChargeHour.starttime',
                    dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
                  },
                ],
                order: [['WeekChargeHour.day_number', 'asc']],
                filters: [    {
                  "member": "WeekChargeHour.stationId",
                  "operator":this.state.mapCenter.operation,
                  "values": [this.state.mapCenter.left,this.state.mapCenter.right]
                },
                // {and:[
                //   {
                //     "member": "WeekChargeHour.stationId",
                //     "operator": 'equals',
                //     "values": ['267','269','270','271','273','309','311','313','268','272','274','307','308','310','312','314']
                //   }
                // ],},
              ],
                dimensions: ['WeekChargeHour.day_of_week', 'WeekChargeHour.day_number'],
              },
              chartType: 'bar',
            },
          },
          {
            id: 5,
            name: 'Energy Charging and Maintianing Charge by Hour (/kWh)',
            vizState: {
              query: {
                measures: ['DayCharge.energy', 'DayMaintain.energy'],
                timeDimensions: [
                  {
                    dimension: 'DayCharge.starttime',
                    dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
                  },
                ],
                order: [['DayCharge.hour', 'asc']],
                filters: [    {
                  "member": "DayCharge.stationId",
                  "operator": this.state.mapCenter.operation,
                  "values": [this.state.mapCenter.left,this.state.mapCenter.right]
                },
                // {and:[
                //   {
                //     "member": "DayCharge.stationId",
                //     "operator": 'equals',
                //     "values": ['267','269','270','271','273','309','311','313','268','272','274','307','308','310','312','314']
                //   }
                // ],},
              ],
                dimensions: ['DayCharge.hour'],
              },
              chartType: 'bar',
            },
          },
          {
            id: 6,
            name: 'Time Charging and Maintianing Charge by Day (/h)',
            vizState: {
              query: {
                measures: ['DayChargeHour.spent', 'DayMaintainHour.spent'],
                timeDimensions: [
                  {
                    dimension: 'DayChargeHour.starttime',
                    dateRange: [this.state.startDate.Date, this.state.finishDate.Date],
                  },
                ],
                order: [['DayChargeHour.hour_on', 'asc']],
                filters: [    {
                  "member": "DayChargeHour.stationId",
                  "operator":this.state.mapCenter.operation,
                  "values": [this.state.mapCenter.left,this.state.mapCenter.right]
                },
                // {and:[
                //   {
                //     "member": "DayChargeHour.stationId",
                //     "operator": 'equals',
                //     "values": ['267','269','270','271','273','309','311','313','268','272','274','307','308','310','312','314']
                //   }
                // ],},
              ],
                dimensions: ['DayChargeHour.hour_on'],
              },
              chartType: 'bar',
            },
          },
        ];
        const dashboardItem = (item) => (
          <Grid item xs={12} lg={6} key={item.id}>
            <DashboardItem title={item.name}>
              <ChartRenderer vizState={item.vizState} />
            </DashboardItem>
          </Grid>
        );
        
        const Empty = () => (
          <div
            style={{
              textAlign: 'center',
              padding: 12,
            }}
          >
            <Typography variant="h5" color="inherit">
              There are no charts on this dashboard. Use Playground Build to add one.
            </Typography>
          </div>
        );

        return DashboardItems.length ? (
          <div >
            <div> 
            <div>
      <Grid container spacing={4}>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          m={2}
        >
          <div >
          </div>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          m={2}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                id="date-picker-dialog"
               label={<span style={{opacity: 0.6}}>Start Date</span>}
                format="MM/dd/yyyy"
                value={this.state.startDate.Date}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          m={2}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                id="date-picker-dialog-finish"
                label={<span style={{opacity: 0.6}}>Finish Date</span>}
                format="MM/dd/yyyy"
                value={this.state.finishDate.Date}
                onChange={this.handleDateChangeFinish}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
          </div>
            <Table query={query}/>
            <Dashboard>
              {DashboardItems.map(dashboardItem)}
            </Dashboard> 
          </div> 
          <Card>
          <RadioForm/>
          </Card>
          <Card style={{width:'50%',height:'70%',position:'absolute'}}> 
          <Map 
             google={this.props.google}
             onClick={this.onMapClicked}
             initialCenter={{
               lat: this.state.mapCenter.lat,
               lng: this.state.mapCenter.lng
             }}
             center={{
               lat: this.state.mapCenter.lat,
               lng: this.state.mapCenter.lng
             }}
          >
              < Marker
                 onClick={this.onMarkerClick}
                 position={{
                 lat: this.state.mapCenter.lat,
                 lng: this.state.mapCenter.lng
                 }}
                
              >
              </Marker>
              <InfoWindow
                 marker={this.state.activeMarker}
                 visible={this.state.showingInfoWindow}
                 >
                   <div>
                   <h1>{this.state.mapCenter.value}</h1>
                   <h2>Address: {this.state.mapCenter.address}</h2>
                   <h3>Left Charger Status: {this.state.mapCenter.status1}</h3>
                   <h3>Right Charger Status: {this.state.mapCenter.status2}</h3>
                   <h3>Left Energy Used: {this.state.mapCenter.kwh1} kWh</h3>
                   <h3>Right Energy Used: {this.state.mapCenter.kwh2} kWh</h3>
                   </div>
              </InfoWindow>
           </Map>
            </Card> 
           </div>
          ) : (
          <Empty />
        );
      };
      
   }


   export default GoogleApiWrapper({apiKey: ("")})(MapContainer);
