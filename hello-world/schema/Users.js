cube(`Users`, {
  sql: `SELECT * FROM public.users`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, id, firstName, lastName, createdAt]
    }
  },
  
  dimensions: {
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    id: {
      shown: true,
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },

    fullName: {
    sql: `CONCAT(${firstName}, ' ', ${lastName})`,
    type: `string`
    },

    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
