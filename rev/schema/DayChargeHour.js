cube(`DayChargeHour`, {
  sql: `
  SELECT peak_24_est[1]/3600 as hours, starttime, '00:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[2]/3600 as hours, starttime, '01:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[3]/3600 as hours, starttime, '02:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[4]/3600 as hours, starttime, '03:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[5]/3600 as hours, starttime, '04:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[6]/3600 as hours, starttime, '05:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[7]/3600 as hours, starttime, '06:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[8]/3600 as hours, starttime, '07:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[9]/3600 as hours, starttime, '08:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[10]/3600 as hours, starttime, '09:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[11]/3600 as hours, starttime, '10:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[12]/3600 as hours, starttime, '11:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[13]/3600 as hours, starttime, '12:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[14]/3600 as hours, starttime, '13:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[15]/3600 as hours, starttime, '14:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[16]/3600 as hours, starttime, '15:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[17]/3600 as hours, starttime, '16:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[18]/3600 as hours, starttime, '17:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[19]/3600 as hours, starttime, '18:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[20]/3600 as hours, starttime, '19:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[21]/3600 as hours, starttime, '20:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[22]/3600 as hours, starttime, '21:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[23]/3600 as hours, starttime, '22:00' as hour_on,id
  FROM station_charges_ac
  UNION ALL
  SELECT peak_24_est[24]/3600 as hours, starttime, '23:00' as hour_on,id
  FROM station_charges_ac order by hour_on`,

  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    DayMaintainHour: {
      sql: `${CUBE}.id = ${DayMaintainHour}.id`,
      relationship: `hasOne`
    },
  },
  
  measures: {
    spent: {
      sql: `hours`,
      type: `sum`
    },
    // count: {
    //   type: `count`,
    //   drillMembers: [id, kwh24EstIdle, idleKwh, rightSide, userId, idle7Est, modemId]
    // }
  },
  
  dimensions: {
    hour_on: {
      sql: `hour_on`,
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
