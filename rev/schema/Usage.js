cube(`Usage`, {
  sql: `select (time_24[1]+time_24[2]+time_24[3]+time_24[4]+time_24[5]+time_24[6]+time_24[7]+time_24[8]+time_24[9]
    +time_24[10]+time_24[11]+time_24[12]+time_24[13]+time_24[14]+time_24[15]+time_24[16]+time_24[17]+time_24[18]
    +time_24[19]+time_24[20]+time_24[21]+time_24[22]+time_24[23]+time_24[24]) as plug_in_time,
  (peak_7_est[1] + peak_7_est[2] + peak_7_est[3]+ peak_7_est[4]+ peak_7_est[5]
    + peak_7_est[6]+ peak_7_est[7]) as charge_time,
    (idle_7_est[1] + idle_7_est[2] + idle_7_est[3]+ idle_7_est[4]+ idle_7_est[5]
    + idle_7_est[6]+ idle_7_est[7]) as maintain_time,
     (peak_7_est_kwh[1] + peak_7_est_kwh[2] + peak_7_est_kwh[3]+ peak_7_est_kwh[4]+ peak_7_est_kwh[5]
    + peak_7_est_kwh[6]+ peak_7_est_kwh[7]) as power_peak,
      (idle_7_est_kwh[1] + idle_7_est_kwh[2] + idle_7_est_kwh[3]+ idle_7_est_kwh[4]+ idle_7_est_kwh[5]
    + idle_7_est_kwh[6]+ idle_7_est_kwh[7]) as power_off_peak,*
  from station_charges_ac`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    ChargingStation: {
      relationship: `belongsTo`, 
      sql: `${CUBE}.station_id =${ChargingStation}.station_id`,
    },
    
  },
  
  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [modemId, idle7Est, userId, id, idle7EstKwh, rightSide, kwh24EstIdle]
    // }
    plug_in_time: {
      sql: `plug_in_time`,
      type: `sum`,
    },
    charge_time: {
      sql: `charge_time`,
      type: `sum`,
    },
    maintain_time: {
      sql: `maintain_time`,
      type: `sum`,
    },
    power_peak: {
      sql: `power_peak`,
      type: `sum`,
    },
    power_off_peak: {
      sql: `power_off_peak`,
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
    side: {
      sql: `side`,
      type: `string`,
    },
    kWh: {
      sql: `kwh`,
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
