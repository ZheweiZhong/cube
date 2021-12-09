cube(`Peak24EstKwh`, {
  sql: `SELECT * FROM public.peak24_est_kwh`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Idle24EstKwh: {
      sql: `${CUBE}.id = ${Idle24EstKwh}.id`,
      relationship: `hasOne`
    },
    
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
