cube(`SequenceOfWeek`, {
  sql: `SELECT * FROM public.sequence_of_week`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    WeekCharge: {
      sql: `${CUBE}.day_of_week = ${WeekCharge}.day_of_week`,
      relationship: `hasOne`
    },
  },

  
  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [id]
    // }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,

    },
    
    dayOfWeek: {
      sql: `day_of_week`,
      type: `string`,
      primaryKey: true,
    }
  },
  
  dataSource: `default`
});