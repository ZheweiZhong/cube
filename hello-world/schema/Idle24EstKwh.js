cube(`Idle24EstKwh`, {
  sql: `SELECT * FROM public.idle24_est_kwh`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    kwh: {
      sql: `kwh`,
      type: `avg`,
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    hourOfDay: {
      sql: `hour_of_day`,
      type: `string`
    },

    starttime: {
      sql: `starttime`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
