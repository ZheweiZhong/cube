cube(`KwhChargeMaintain`, {
  sql: `SELECT * FROM public.kwh_charge_maintain`,
  
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
    },
    maintain: {
      sql: `maintain`,
      type: `sum`
    }
  },
  
  dimensions: {
    hours: {
      sql: `hours`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
