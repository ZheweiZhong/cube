import {Map, InfoWindow, Marker, GoogleApiWrapper,google} from 'google-maps-react';
import React,{Component,useState} from 'react';
import { useCubeQuery } from '@cubejs-client/react';

const style = {
  width: '50%',
  height: '70%',
  position: "relative",
};

const style2 = {
    rightt:'30%',
    position: "absolute",
  };


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      mapCenter:{
      id:'',
      lat: -31.980773,
      lng: 115.816244,
      value:'',
      address:''},
      
      showingInfoWindow: true,
      activeMarker: {},
    };
    
  }

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
  console.log("AfterChange",e.target.value);
  console.log(arr);
  console.log(typeof(e.target.value));
  this.setState({mapCenter:{id:arr[0],lat:arr[1],lng:arr[2],value:arr[3],address:arr[4]}});
  console.log(this.state.mapCenter);
}

  render() {
    
    const parks =[
      {id:'1',latitude:-31.980773,longtitude:115.816244,value:"UWA REV Lab",address:"UWA EE3.11 WA 6009"},
      {id:'2',latitude:-32.130416,longtitude:115.853805,value:"City of Cockburn",address:"25 Wentworth Pde WA 6164"},
      {id:'3',latitude:-31.912302,longtitude:115.811447,value:"West Australian dual charging station",address:"50 Hasler Road WA 6017"},
      {id:'4',latitude:-31.943921,longtitude:115.876775,value:"Department of Transport",address:"East Perth Train Station -  Summers Street (West) WA 6003"},
      {id:'5',latitude:-31.977548,longtitude:115.816322,value:"UWA Computer Science",address:"Fairway - Entry No. 4 WA 6009"},
      {id:'6',latitude:-31.949506,longtitude:115.823085,value:"Subiaco",address:"78 Rowland Street WA 6008"},
      {id:'7',latitude:-31.956628,longtitude:115.877066,value:"Mainroads WA",address:"Don Aitken Centre - Waterloo Crescent WA 6004"},
      {id:'8',latitude:-32.06949,longtitude:115.841147,value:"Murdoch University CREST",address:"Murdoch Drive WA 6150"},
      {id:'9',latitude:-31.869875,longtitude:116.016412,value:"City of Swan",address:"City of Swan Depot - Bishop Road WA 6056"},
    ];
    return (
      <div >
        <form value={this.state.mapCenter} onChange={this.handleChange} style={{left:'70%',top:'10%',position:'absolute'}}>
        {parks.map((option) => (
           <div >
             <input type="radio" 
                    key={option.id} 
                    checked={this.state.mapCenter.id === option.id} 
                    value={[option.id,option.latitude,option.longtitude,option.value,option.address]}
                     />
             <label style={{ font: '18px Arial',padding:'10px'}}>{option.value}</label>
           </div>))}
        </form>
        <div id='googleMaps' style={{width:'50%',height:'70%',position:'absolute'}}>
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
         </div>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDd1tN_pSKfzCEQful4VOsg9f_sf0GmRjY")
})(MapContainer);



