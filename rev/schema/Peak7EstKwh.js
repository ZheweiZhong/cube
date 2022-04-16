// cube(`WeekCharge`, {
//   sql: `SELECT * FROM public.peak_7_est_kwh`,
  
//   preAggregations: {
//     // Pre-Aggregations definitions go here
//     // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
//   },
  
//   joins: {
//     WeekMaintain: {
//       sql: `${CUBE}.id = ${WeekMaintain}.id`,
//       relationship: `hasOne`
//     },

//   },
  
//   measures: {
//     energy: {
//       sql: `kwh`,
//       type: `sum`
//     }
//   },
  
//   dimensions: {
//     id: {
//       sql: `id`,
//       type: `number`,
//       primaryKey: true
//     },
    
//     dayOfWeek: {
//       sql: `day_of_week`,
//       type: `string`
//     },
    
//     starttime: {
//       sql: `starttime`,
//       type: `time`
//     }
//   },
  
//   dataSource: `default`
// });
