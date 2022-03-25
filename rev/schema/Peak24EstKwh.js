cube(`DayCharge`, {
  sql: `SELECT * FROM public.peak24_est_kwh`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    DayMaintain: {
      sql: `${CUBE}.id = ${DayMaintain}.id`,
      relationship: `hasOne`
    },
    
  },
  
  measures: {
    energy: {
      sql: `kwh`,
      type: `sum`,
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
