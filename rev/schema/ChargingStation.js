cube(`ChargingStation`, {
  sql: `SELECT station1 as station_id,organisation
  FROM public.charging_stations`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    organisation: {
      sql: `organisation`,
      type: `string`
    },

    stationid: {
      primaryKey: true,
      sql: `station_id`,
      type: `number`,
    },
  },
  
  dataSource: `default`
});
