import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
import Toolbar from "../components/Toolbar.js";
import {Map, InfoWindow, Marker, GoogleApiWrapper,google} from 'google-maps-react';
import {Component,useState} from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
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
        id:'',
        lat: -31.980773,
        lng: 115.816244,
        value:'',
        address:'',
        left:'',
        right:'',
        operation:'set'
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
    // console.log("AfterChange",e.target.value);
    // console.log(arr);
    // console.log(typeof(e.target.value));
    this.setState({mapCenter:{id:arr[0],lat:arr[1],lng:arr[2],value:arr[3],address:arr[4],left:arr[5],right:arr[6],operation:arr[7]}});
    console.log(this.state.mapCenter);
  }
  
    render() {
        // const [startDate, setStartDate] = React.useState(new Date("2012-07-01T00:00:00"));
        // const [finishDate, setFinishDate] = React.useState(new Date("2012-07-31T00:00:00"));
        // const query = {
        //   timeDimensions: [
        //   ],
        //       order: {
        //         },
        //   dimensions: [
        //     'ChargingStations.status1',
        //     'ChargingStations.status2',
        //     'ChargingStations.organisation'
        //   ],
        // };
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
        const parks =[
          {id:'1',latitude:-31.980773,longtitude:115.816244,value:"UWA REV Lab",address:"UWA EE3.11 WA 6009",left:'273',right:'274',operation:'equals'},
          {id:'2',latitude:-32.130416,longtitude:115.853805,value:"City of Cockburn",address:"25 Wentworth Pde WA 6164",left:'271',right:'272',operation:'equals'},
          {id:'3',latitude:-31.912302,longtitude:115.811447,value:"West Australian dual charging station",address:"50 Hasler Road WA 6017",left:'307',right:'308',operation:'equals'},
          {id:'4',latitude:-31.943921,longtitude:115.876775,value:"Department of Transport",address:"East Perth Train Station -  Summers Street (West) WA 6003",left:'269',right:'270',operation:'equals'},
          {id:'5',latitude:-31.977548,longtitude:115.816322,value:"UWA Computer Science",address:"Fairway - Entry No. 4 WA 6009",left:'313',right:'314',operation:'equals'},
          {id:'6',latitude:-31.949506,longtitude:115.823085,value:"Subiaco",address:"78 Rowland Street WA 6008",left:'275',right:'276',operation:'equals'},
          {id:'7',latitude:-31.956628,longtitude:115.877066,value:"Mainroads WA",address:"Don Aitken Centre - Waterloo Crescent WA 6004",left:'309',right:'310',operation:'equals'},
          {id:'8',latitude:-32.06949,longtitude:115.841147,value:"Murdoch University CREST",address:"Murdoch Drive WA 6150",left:'267',right:'268',operation:'equals'},
          {id:'9',latitude:-31.869875,longtitude:116.016412,value:"City of Swan",address:"City of Swan Depot - Bishop Road WA 6056",left:'311',right:'312',operation:'equals'},
          {id:'10',latitude:-31.869875,longtitude:116.016412,value:"All stations",address:"",left:'',right:'',operation:'set'},
          ];
        const DashboardItems = [
          {
            id: 1,
            name: 'Energy Supply by Stations',
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
            name: 'Period Energy',
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
            name: 'kWh Charging and Maintianing Charge by Week ',
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
            name: 'Hours Charging and Maintianing Charge by Week',
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
            name: 'kWh Charging and Maintianing Charge by Hour',
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
            name: 'kWh Charging and Maintianing Charge by Day',
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
                  "operator": this.state.mapCenter.operation,
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
            {/* <Toolbar
             startDate={this.state.startDate.Date}
             finishDate={this.state.finishDate.Date}
            /> */}
                <Table query={query}/>
            <Dashboard>
              {DashboardItems.map(dashboardItem)}
            </Dashboard> 
          </div> 
          <Card>
            <form value={this.state.mapCenter} onChange={this.handleChange}
                  style={{left:'70%',position:'absolute'}}>
                  {parks.map((option) => (
                  <div >
                    <input type="radio" 
                      key={option.id} 
                      checked={this.state.mapCenter.id === option.id} 
                      value={[option.id,option.latitude,option.longtitude,option.value,option.address,option.left,option.right,option.operation]}
                       />
                    <label style={{ font: '18px Arial',padding:'10px'}}>{option.value}</label>
                  </div>))}
             </form>
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
              />
              <InfoWindow
                 marker={this.state.activeMarker}
                 visible={this.state.showingInfoWindow}>
                 <div>
                    <h1>{this.state.mapCenter.value}</h1>
                    <h2>Left charger status:Not in use</h2>
                    <h2>Right charger status:In use</h2>
                    <h2>Left KW = 0kW</h2>
                    <h2>Right KW = 0kW</h2>
                    <h2>Address:{this.state.mapCenter.address}</h2>
                 </div>
              </InfoWindow>
           </Map>
            </Card> 
          {/* <div id='googleMaps'
          style={{width:'50%',height:'70%',position:'absolute'}}> */}

           </div>
          ) : (
          <Empty />
        );
      };
      
   }


   export default GoogleApiWrapper({apiKey: ("")})(MapContainer);
