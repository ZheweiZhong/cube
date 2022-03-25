cube(`EnergyUsedDc`, {
  sql: `SELECT * FROM public.energy_used_dc`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      sql: `energy`,
      type: `sum`
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
