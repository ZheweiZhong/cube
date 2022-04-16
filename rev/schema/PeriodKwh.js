// cube(`PeriodKwh`, {
//   sql: `SELECT * FROM public.period_kwh`,
  
//   preAggregations: {
//     // Pre-Aggregations definitions go here
//     // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
//   },
  
//   joins: {
    
//   },
  
//   measures: {
//     energy: {
//       sql: `kwh`,
//       type: `sum`
//     },
//   },
  
//   dimensions: {
//     period: {
//       sql: `period`,
//       type: `string`
//     },
    
//     starttime: {
//       sql: `starttime`,
//       type: `time`
//     }
//   },
  
//   dataSource: `default`
// });
