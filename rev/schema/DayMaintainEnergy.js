cube(`DayMaintain`, {
  sql: `
  SELECT kwh_24_est_idle[1] as kwh, starttime, '00:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[2] as kwh, starttime, '01:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[3] as kwh, starttime, '02:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[4] as kwh, starttime, '03:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[5] as kwh, starttime, '04:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[6] as kwh, starttime, '05:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[7] as kwh, starttime, '06:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[8] as kwh, starttime, '07:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[9] as kwh, starttime, '08:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[10] as kwh, starttime, '09:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[11] as kwh, starttime, '10:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[12] as kwh, starttime, '11:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[13] as kwh, starttime, '12:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[14] as kwh, starttime, '13:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[15] as kwh, starttime, '14:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[16] as kwh, starttime, '15:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[17] as kwh, starttime, '16:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[18] as kwh, starttime, '17:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[19] as kwh, starttime, '18:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[20] as kwh, starttime, '19:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[21] as kwh, starttime, '20:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[22] as kwh, starttime, '21:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[23] as kwh, starttime, '22:00' as hour_on,id,station_id
  FROM station_charges_ac
  UNION ALL
  SELECT kwh_24_est_idle[24] as kwh, starttime, '23:00' as hour_on,id,station_id
  FROM station_charges_ac order by hour_on`,

  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  
  measures: {
    energy: {
      sql: `kwh`,
      type: `sum`
    },
    // count: {
    //   type: `count`,
    //   drillMembers: [id, kwh24EstIdle, idleKwh, rightSide, userId, idle7Est, modemId]
    // }
  },
  
  dimensions: {
    stationId: {
      sql: `station_id`,
      type: `number`
    },
    hour: {
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
