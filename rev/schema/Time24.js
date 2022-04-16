// cube(`DayMaintainHour`, {
//   sql: `SELECT * FROM public.time_24`,
  
//   preAggregations: {
//     // Pre-Aggregations definitions go here
//     // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
//   },
  
//   joins: {
    
//   },
  
//   measures: {
//     totalHour: {
//       sql: `total_hour`,
//       type: `sum`
//     },
    
//     peakHour: {
//       sql: `peak_hour`,
//       type: `sum`
//     },
    
//     spent: {
//       sql: `idle_hour`,
//       type: `sum`
//     },

//   },
  
//   dimensions: {
//     id: {
//       sql: `id`,
//       type: `number`,
//       primaryKey: true
//     },
    
//     value: {
//       sql: `value`,
//       type: `string`
//     },
  
    
//     hourOfDay: {
//       sql: `hour_of_day`,
//       type: `string`
//     },
    
//     starttime: {
//       sql: `starttime`,
//       type: `time`
//     }
//   },
  
//   dataSource: `default`
// });
