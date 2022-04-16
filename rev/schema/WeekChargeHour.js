cube(`WeekChargeHour`, {
  sql: `SELECT
  (peak_7_est[1] + peak_7_est[2] + peak_7_est[3]+ peak_7_est[4]+ peak_7_est[5]
  + peak_7_est[6]+ peak_7_est[7])/3600 as hours,EXTRACT(DOW FROM starttime)as day_number,
  to_char(starttime, 'Day') AS day_of_week,starttime,id
FROM station_charges_ac`,

  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    WeekMaintainHour: {
      sql: `${CUBE}.id = ${WeekMaintainHour}.id`,
      relationship: `hasOne`
    },
    
  },
  
  measures: {
    hours: {
      sql: `hours`,
      type: `sum`
    },
    // count: {
    //   type: `count`,
    //   drillMembers: [id, kwh24EstIdle, idleKwh, rightSide, userId, idle7Est, modemId]
    // }
  },
  
  dimensions: {
    day_number: {
      sql: `day_number`,
      type: `number`,
    },
    day_of_week: {
      sql: `day_of_week`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    kwh24EstPeak: {
      sql: `kwh_24_est_peak`,
      type: `string`,
      title: `Kwh 24 Est Peak`
    },
    
    kwh24EstIdle: {
      sql: `kwh_24_est_idle`,
      type: `string`,
      title: `Kwh 24 Est Idle`
    },
    
    syncTime: {
      sql: `sync_time`,
      type: `string`
    },
    
    syncedTo: {
      sql: `synced_to`,
      type: `string`
    },
    
    peakKwh: {
      sql: `peak_kwh`,
      type: `string`
    },
    
    idleKwh: {
      sql: `idle_kwh`,
      type: `string`
    },
    
    peak7EstKwh: {
      sql: `peak_7_est_kwh`,
      type: `string`,
      title: `Peak 7 Est Kwh`
    },
    

    
    rightSide: {
      sql: `right_side`,
      type: `string`
    },
    
    userId: {
      sql: `user_id`,
      type: `string`
    },
    
    time24: {
      sql: `time_24`,
      type: `string`,
      title: `Time 24`
    },
    
    peak24: {
      sql: `peak_24`,
      type: `string`,
      title: `Peak 24`
    },
    
    kwh24: {
      sql: `kwh_24`,
      type: `string`,
      title: `Kwh 24`
    },
    
    peak24Est: {
      sql: `peak_24_est`,
      type: `string`,
      title: `Peak 24 Est`
    },
    
    peak7Est: {
      sql: `peak_7_est`,
      type: `string`,
      title: `Peak 7 Est`
      
    },
    
    idle7Est: {
      sql: `idle_7_est`,
      type: `string`,
      title: `Idle 7 Est`
    },
    
    modemId: {
      sql: `modem_id`,
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
    
    bStarttime: {
      sql: `b_starttime`,
      type: `time`
    },
    
    bEndtime: {
      sql: `b_endtime`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
