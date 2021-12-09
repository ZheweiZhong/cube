cube(`KwhChargeMaintainDay`, {
  sql: `SELECT * FROM public.kwh_charge_maintain_day`,
  
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
    dayOfWeek: {
      sql: `day_of_week`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
    }
  },
  
  dataSource: `default`
});
