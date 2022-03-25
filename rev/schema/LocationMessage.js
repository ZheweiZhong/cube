cube(`LocationMessage`, {
  sql: `SELECT * FROM public.location_message`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    pluggedInTime: {
      sql: `plugged_in_time`,
      type: `string`
    },
    
    estimatedCost: {
      sql: `estimated_cost`,
      type: `string`
    },
    
    averageTransactionTime: {
      sql: `average_transaction_time`,
      type: `string`
    },
    
    maintainingChargeTime: {
      sql: `maintaining_charge_time`,
      type: `string`
    },
    
    estimatedCostPeakShoulderOff: {
      sql: `estimated_cost_peak_shoulder_off`,
      type: `string`
    },
    
    chargingTime: {
      sql: `charging_time`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
