cube(`TransactionDc`, {
  sql: `SELECT * FROM public.transaction_dc`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [id, startTimestamp, endTimestamp]
    // },


  },
  
  dimensions: {

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

   
    startTimestamp: {
      sql: `start_timestamp`,
      type: `time`
    },
    
    endTimestamp: {
      sql: `end_timestamp`,
      type: `time`
    },
    
   
    duration: {
      sql: `duration`,
      type: `time`
    },

    meterStart:{
      sql: `meter_start`,
      type: `number`
    },

    meterStop:{
      sql: `meter_stop`,
      type: `number`
    },

    meterUsed:{
      sql: `meter_used`,
      type: `number`
    },
    

    energyUsed:{
      sql: `${meterUsed} / 1000`,
      type: `number`,
      format:`currency`
    },
    stopReason: {
      sql: `stop_reason`,
      type: `string`
    },

    connecterId:{
      sql: `connector_id`,
      type: `number`
    },
    
    startTokenId:{
      sql: `start_token_id`,
      type: `number`
    },

    endTokenId:{
      sql: `end_token_id`,
      type: `number`
    },

    costPerKwh:{
      sql: `cost_per_kwh`,
      type: `number`
    },
  },
  
  dataSource: `default`
});
