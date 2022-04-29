cube(`ChargingStations`, {
  sql: `SELECT * FROM public.charging_stations`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, country, leftPreviousUpdate, rightPreviousUpdate]
    }
  },
  
  dimensions: {
    organisation: {
      sql: `organisation`,
      type: `string`,
    },
    
    status1: {
      sql: `status_1`,
      type: `string`,
      title: `Status 1`
    },
    
    status2: {
      sql: `status_2`,
      type: `string`,
      title: `Status 2`
    },

    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    longtitude: {
      sql: `longtitude`,
      type: `string`
    },
    
    installed1: {
      sql: `installed_1`,
      type: `string`,
      title: `Installed 1`
    },
    
    installed2: {
      sql: `installed_2`,
      type: `string`,
      title: `Installed 2`
    },
    
    currentKwh1: {
      sql: `current_kwh_1`,
      type: `string`,
      title: `Current Kwh 1`
    },
    
    currentKwh2: {
      sql: `current_kwh_2`,
      type: `string`,
      title: `Current Kwh 2`
    },
    
    totalKwh1: {
      sql: `total_kwh_1`,
      type: `string`,
      title: `Total Kwh 1`
    },
    
    totalKwh2: {
      sql: `total_kwh_2`,
      type: `string`,
      title: `Total Kwh 2`
    },
    
    leftInstalled: {
      sql: `left_installed`,
      type: `string`
    },
    
    rightInstalled: {
      sql: `right_installed`,
      type: `string`
    },
    
    leftLastKwh: {
      sql: `left_last_kwh`,
      type: `string`
    },
    
    rightLastKwh: {
      sql: `right_last_kwh`,
      type: `string`
    },
    
    stationType: {
      sql: `station_type`,
      type: `string`
    },
    
   
    funder: {
      sql: `funder`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    contact: {
      sql: `contact`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    user1: {
      sql: `user_1`,
      type: `string`,
      title: `User 1`
    },
    
    user2: {
      sql: `user_2`,
      type: `string`,
      title: `User 2`
    },
    
    electCost: {
      sql: `elect_cost`,
      type: `string`
    },
    
    electSale: {
      sql: `elect_sale`,
      type: `string`
    },
    
    leftModem: {
      sql: `left_modem`,
      type: `string`
    },
    
    rightModem: {
      sql: `right_modem`,
      type: `string`
    },
    
    leftIp: {
      sql: `left_ip`,
      type: `string`
    },
    
    rightIp: {
      sql: `right_ip`,
      type: `string`
    },
    
    oldLeft: {
      sql: `old_left`,
      type: `string`
    },
    
    oldRight: {
      sql: `old_right`,
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
    },
    
    rightLastConnect: {
      sql: `right_last_connect`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
