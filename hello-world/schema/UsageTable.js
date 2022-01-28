cube(`UsageTable`, {
  sql: `SELECT * FROM public.usage_table`,
  
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
    estimatedCost22c: {
      sql: `estimated_cost_22c`,
      type: `string`,
      title: `Estimated Cost 22c`
    },
    
    estimatedCostPso: {
      sql: `estimated_cost_pso`,
      type: `string`
    },

    numberOfTransactions: {
      sql: `number_of_transactions`,
      type: `string`,
    },

    pluggedInTime: {
      sql: `plugged_in_time`,
      type: `time`,
    },

    chargingTime: {
      sql: `charging_time`,
      type: `time`,
    },

    maintainingChargeTime: {
      sql: `maintaining_charge_time`,
      type: `time`,
    },

    averageTransactionTime: {
      sql: `average_transaction_time`,
      type: `time`,
    },

    averageChargingTransactionTime: {
      sql: `average_charging_transaction_time`,
      type: `time`,
    },

    averageMaintainingChargeTransactionTime: {
      sql: `average_maintaining_charge_transaction_time`,
      type: `time`,
    },

    percentageTimeInUse: {
      sql: `percentage_time_in_use`,
      type: `number`,
      format: `percent`,
    },

    powerUsedInPeak: {
      sql: `power_used_in_peak`,
      type: `number`,
    },

    powerUsedInShoulder: {
      sql: `power_used_in_shoulder`,
      type: `number`,
    },

    powerUsedInOffPeak: {
      sql: `power_used_in_off_peak`,
      type: `number`,
    },

     

  },
  
  dataSource: `default`
});
