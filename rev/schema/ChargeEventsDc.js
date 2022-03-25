cube(`ChargeEventsDc`, {
  sql: `SELECT * FROM public.charge_events_dc`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      sql: `count`,
      type: `sum`,
      }
  },
  
  dimensions: {
    datetime: {
      sql: `datetime`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
