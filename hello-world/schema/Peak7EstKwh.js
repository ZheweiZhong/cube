cube(`Peak7EstKwh`, {
  sql: `SELECT * FROM public.peak_7_est_kwh`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Idle7EstKwh: {
      sql: `${CUBE}.id = ${Idle7EstKwh}.id`,
      relationship: `hasOne`
    },

  },
  
  measures: {
    kwh: {
      sql: `kwh`,
      type: `avg`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    dayOfWeek: {
      sql: `day_of_week`,
      type: `string`
    },
    
    starttime: {
      sql: `starttime`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
