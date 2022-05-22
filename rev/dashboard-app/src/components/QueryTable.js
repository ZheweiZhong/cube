import React from 'react';
import { useCubeQuery }  from '@cubejs-client/react';
import { Table } from 'antd';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import {Bar} from 'recharts';
const QueryTable=()=> {
  const { resultSet, isLoading, error, progress } = useCubeQuery({
    measures: [],
    dimensions:[
      'ChargingStations.status1',
      'ChargingStations.status2'
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

const dataSource= resultSet.series().map((a) => (
<div style={{ font: '18px Arial',padding:'10px',textAlign:'center'}}>{a.key}
<ul>
  {a.series.map(b=>
  <li>
    {b.value}
    {b.x}
  </li>  
  )}
  {/* {c.series.map((a)=>(<label style={{ font: '18px Arial',padding:'10px',textAlign:'center'}}>{a.value}</label>))} */}
</ul>
  </div>
))
  return <span>datasource{dataSource}</span>
  
    
     
}
export default QueryTable;

