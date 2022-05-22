cube(`PeriodEnergy`, {
  sql: `SELECT
  kwh, starttime, 'off_peak' as period,station_id
  FROM station_charges_ac where (extract (hour from starttime)<8 or extract (hour from starttime)>22)
  union all
  SELECT
  kwh, starttime, 'peak' as period,station_id
  FROM station_charges_ac where (extract (hour from starttime)>=8 and extract (hour from starttime)<=22)
  order by starttime `,

  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
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
    period: {
      sql: `period`,
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
