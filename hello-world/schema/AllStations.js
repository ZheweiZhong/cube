cube(`AllStations`, {
  sql: `SELECT * FROM public.all_stations`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    kwh: {
      sql: `kwh`,
      type: `sum`
    }
  },
  
  dimensions: {
    usageFrequency: {
      sql: `usage_frequency`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
