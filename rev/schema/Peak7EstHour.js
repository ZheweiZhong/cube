// cube(`WeekChargeHour1`, {
//   sql: `SELECT * FROM public.peak_7_est_hour`,
  
//   preAggregations: {
//     // Pre-Aggregations definitions go here
//     // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
//   },
  
//   joins: {
//     WeekMaintainHour: {
//       sql: `${CUBE}.id = ${WeekMaintainHour}.id`,
//       relationship: `hasOne`
//     },
    
//   },
  
//   measures: {
//     spent: {
//       sql: `hour_spent`,
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
