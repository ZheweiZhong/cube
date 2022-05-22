cube(`ChargingStations`, {
  sql: `select 'equals'as operation, station_id,latitude,longtitude,organisation,address,
  station1,station2,status_1,status_2,total_kwh_1,total_kwh_2, servertime_1 from charging_stations
  union all
  select 'set'as operation, 1 as station_id, -31.980773 as latitude,115.816244 as longtitude, 'All stations' as organisation, 
  null as address, null as station1, null as station2, null as status_1, null as status_2, 
  null as total_kwh_1, null as total_kwh_2 , servertime_1 from charging_stations where station_id=736`,
  
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
    operation: {
      sql: `operation`,
      type: `string`,
    },
    station_id: {
      sql: `station_id`,
      type: `number`,
    },
    organisation: {
      sql: `organisation`,
      type: `string`
    },
        
    address: {
      sql: `address`,
      type: `string`,
    },
    station1: {
      sql: `station1`,
      type: `number`,
    },
    station2: {
      sql: `station2`,
      type: `number`,
    },

    latitude: {
      sql: `latitude`,
      type: `number`
    },
    
    longtitude: {
      sql: `longtitude`,
      type: `number`
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
      type: `number`,
    },
    
    totalKwh2: {
      sql: `total_kwh_2`,
      type: `number`,
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
