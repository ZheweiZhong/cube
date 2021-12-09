import {Map, InfoWindow, Marker, GoogleApiWrapper,google} from 'google-maps-react';
import React,{Component,useState} from 'react';

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
      value:'',},
      
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
  this.setState({mapCenter:{id:arr[0],lat:arr[1],lng:arr[2],value:arr[3]}});
  console.log(this.state.mapCenter);
}

  render() {
    
    const parks =[
      {id:'1',latitude:-31.980773,longtitude:115.816244,value:"UWA REV Lab"},
      {id:'2',latitude:-32.130416,longtitude:115.853805,value:"City of Cockburn"},
      {id:'3',latitude:-31.912302,longtitude:115.811447,value:"West Australian dual charging station"},
      {id:'4',latitude:-31.943921,longtitude:115.876775,value:"Department of Transport"},
      {id:'5',latitude:-31.977548,longtitude:115.816322,value:"UWA Computer Science"},
      {id:'6',latitude:-31.949506,longtitude:115.823085,value:"Subiaco"},
      {id:'7',latitude:-31.956628,longtitude:115.877066,value:"Mainroads WA"},
      {id:'8',latitude:-32.06949,longtitude:115.841147,value:"Murdoch University CREST"},
      {id:'9',latitude:-31.869875,longtitude:116.016412,value:"City of Swan"},
    ];
    return (
      <div >
        <form value={this.state.mapCenter} onChange={this.handleChange} style={{left:'70%',top:'10%',position:'absolute'}}>
        {parks.map((option) => (
           <div >
             <input type="radio" 
                    key={option.id} 
                    checked={this.state.mapCenter.id === option.id} 
                    value={[option.id,option.latitude,option.longtitude,option.value]}
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



