cube(`Idle7EstHour`, {
  sql: `SELECT * FROM public.idle_7_est_hour`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
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
