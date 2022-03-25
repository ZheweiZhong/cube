cube(`DayChargeHour`, {
  sql: `SELECT * FROM public.peak_24_est_hour`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    DayMaintainHour: {
      sql: `${CUBE}.id = ${DayMaintainHour}.id`,
      relationship: `hasOne`
    },
  },
  
  measures: {
    spent: {
      sql: `hour_spent`,
      type: `sum`,
    },
    
    value: {
      sql: `value`,
      type: `sum`
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
