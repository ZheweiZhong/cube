cube(`Peak7EstHour`, {
  sql: `SELECT * FROM public.peak_7_est_hour`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Idle7EstHour: {
      sql: `${CUBE}.id = ${Idle7EstHour}.id`,
      relationship: `hasOne`
    },
    
  },
  
  measures: {
    hour_spent: {
      sql: `hour_spent`,
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
