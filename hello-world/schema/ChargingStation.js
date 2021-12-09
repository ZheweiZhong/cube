cube(`ChargingStation`, {
  sql: `SELECT * FROM public.charging_station`,
  
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
      sql: `stationid`,
      type: `number`,
    },
  },
  
  dataSource: `default`
});
