cube(`ChargingStations`, {
  sql: `SELECT * FROM public.charging_stations`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    // StationChargesAc: {
    //   relationship: `hasMany`, 
    //   sql: `${CUBE}.station2 =${StationChargesAc}.station_id`,
    // },

    
  },
  
  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [city, country, leftPreviousUpdate, rightPreviousUpdate]
    // }


  },  
  
  dimensions: {
    organisation: {
      sql: `organisation`,
      type: `string`
    },

    station1: {
      // primaryKey: true,
      sql: `station1`,
      type: `number`
    },

    station2: {
      primaryKey: true,
      sql: `station2`,
      type: `number`
    },


    contact: {
      sql: `contact`,
      type: `string`
    },
    
    user2: {
      sql: `user_2`,
      type: `string`,
      title: `User 2`
    },
    
    user1: {
      sql: `user_1`,
      type: `string`,
      title: `User 1`
    },
    
    rightInstalled: {
      sql: `right_installed`,
      type: `string`
    },
    
    installed2: {
      sql: `installed_2`,
      type: `string`,
      title: `Installed 2`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    electSale: {
      sql: `elect_sale`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    status2: {
      sql: `status_2`,
      type: `string`,
      title: `Status 2`
    },
    
    leftIp: {
      sql: `left_ip`,
      type: `string`
    },
    
    leftModem: {
      sql: `left_modem`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    stationType: {
      sql: `station_type`,
      type: `string`
    },
    
    electCost: {
      sql: `elect_cost`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    installed1: {
      sql: `installed_1`,
      type: `string`,
      title: `Installed 1`
    },
    
    rightModem: {
      sql: `right_modem`,
      type: `string`
    },
    
    leftInstalled: {
      sql: `left_installed`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    oldRight: {
      sql: `old_right`,
      type: `string`
    },
    
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    funder: {
      sql: `funder`,
      type: `string`
    },
    
    rightIp: {
      sql: `right_ip`,
      type: `string`
    },
    
    status1: {
      sql: `status_1`,
      type: `string`,
    },
    
    oldLeft: {
      sql: `old_left`,
      type: `string`
    },
    
    leftPreviousUpdate: {
      sql: `left_previous_update`,
      type: `time`
    },
    
    rightPreviousUpdate: {
      sql: `right_previous_update`,
      type: `time`
    },
    
    rightLastConnect: {
      sql: `right_last_connect`,
      type: `time`
    },
    
    servertime1: {
      sql: `servertime_1`,
      type: `time`,
      title: `Servertime 1`
    },
    
    servertime2: {
      sql: `servertime_2`,
      type: `time`,
      title: `Servertime 2`
    },
    
    leftLastConnect: {
      sql: `left_last_connect`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
