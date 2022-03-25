cube(`StationChargesAc1`, {
  sql: `SELECT * FROM public.station_charges_ac`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ChargingStation: {
      relationship: `belongsTo`, 
      sql: `${CUBE}.station_id =${ChargingStation}.stationid`,
    },
    
  },
  
  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [modemId, idle7Est, userId, id, idle7EstKwh, rightSide, kwh24EstIdle]
    // }
    kWh: {
      sql: `kwh`,
      type: `sum`,
    },


    idle7EstKwh: {
      sql: `idle_7_est_kwh`,
      type: `count`,
      title:`idle7EstKwh`
    },

    kwh24EstPeak: {
      sql: `kwh_24_est_peak`,
      type: `count`,
      title:`kwh24EstPeak`
    },

    kwh24EstIdle: {
      sql: `kwh_24_est_idle`,
      type: `count`,
      title:`kwh24EstIdle`
    },

  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
    },

    stationId: {
      primaryKey: true,
      sql: `station_id`,
      type: `number`
    },

    peak7EstKwh: {
      sql: `UNNEST(peak_7_est_kwh)`,
      type: `number`,
      title:`peak7EstKwh`
    },

    userId: {
      sql: `user_id`,
      type: `string`
    },


    starttime: {
      sql: `starttime`,
      type: `time`
    },
    
    endtime: {
      sql: `endtime`,
      type: `time`
    },
    
    peakkwh: {
      sql: `peak_kwh`,
      type: `number`
    },

    idlekwh: {
      sql: `idle_kwh`,
      type: `number`
    },

    peak7Est: {
      sql: `peak_7_est`,
      type: `string`,
    },
    

    
    peak24: {
      sql: `peak_24`,
      type: `string`,
    },
    
    modemId: {
      sql: `modem_id`,
      type: `string`
    },
    
    
    kwh24: {
      sql: `kwh_24`,
      type: `string`,
    },
    
    peak24Est: {
      sql: `peak_24_est`,
      type: `string`,
    },
    
    idle7Est: {
      sql: `idle_7_est`,
      type: `string`,
    },
    
      
    rightSide: {
      sql: `right_side`,
      type: `string`
    },
    
   
    time24: {
      sql: `time_24`,
      type: `string`,
    },
    
    bStarttime: {
      sql: `b_starttime`,
      type: `time`
    },
    
    bEndtime: {
      sql: `b_endtime`,
      type: `time`
    },
    


  },
  
  dataSource: `default`
});
