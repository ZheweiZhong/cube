import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  // {
  //   id: 0,
  //   name: 'Charge Event DC',
  //   vizState: {
  //     query: {
  //       measures: ['ChargeEventsDc.count'],
  //       timeDimensions: [
  //         {
  //           dimension: 'ChargeEventsDc.datetime',
  //           granularity: 'day',
  //         },
  //       ],
  //       order: {
  //         'ChargeEventsDc.datetime': 'asc',
  //       },
  //     },
  //     chartType: 'bar',
  //   },
  // },
  // {
  //   id: 1,
  //   name: 'Charge Events AC',
  //   vizState: {
  //     query: {
  //       measures: ['ChargeEventsAc.count'],
  //       timeDimensions: [
  //         {
  //           dimension: 'ChargeEventsAc.datetime',
  //           granularity: 'day',
  //         },
  //       ],
  //       order: {
  //         'ChargeEventsAc.datetime': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  // {
  //   id: 2,
  //   name: 'Energy Used DC',
  //   vizState: {
  //     query: {
  //       measures: ['EnergyUsedDc.count'],
  //       timeDimensions: [
  //         {
  //           dimension: 'EnergyUsedDc.datetime',
  //           granularity: 'day',
  //         },
  //       ],
  //       order: {
  //         'EnergyUsedDc.datetime': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  // {
  //   id: 3,
  //   name: 'Energy Used AC',
  //   vizState: {
  //     query: {
  //       measures: ['EnergyUsedAc.count'],
  //       timeDimensions: [
  //         {
  //           dimension: 'EnergyUsedAc.datetime',
  //           granularity: 'day',
  //         },
  //       ],
  //       order: {
  //         'EnergyUsedAc.datetime': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //     },
  //     chartType: 'bar',
  //   },
  // }, // {
  //   id: 4,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       dimensions: [
  //         'TransactionDc.startTimestamp',
  //         'TransactionDc.endTimestamp',
  //         'TransactionDc.duration',
  //         'TransactionDc.meterUsed',
  //         'TransactionDc.stopReason',
  //         'TransactionDc.connecterId',
  //         'TransactionDc.startTokenId',
  //         'TransactionDc.endTokenId',
  //         'TransactionDc.costPerKwh',
  //       ],
  //       timeDimensions: [
  //         {
  //           dimension: 'TransactionDc.startTimestamp',
  //           dateRange: ['2021-07-01', '2021-07-30'],
  //         },
  //       ],
  //       order: {
  //         'TransactionDc.duration': 'desc',
  //       },
  //       measures: [],
  //     },
  //     chartType: 'table',
  //   },
  // }, // {
  //   id: 5,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       dimensions: [
  //         'StationChargesAc.id',
  //         'StationChargesAc.stationId',
  //         'StationChargesAc.rightSide',
  //         'StationChargesAc.userId',
  //         'StationChargesAc.kWh',
  //         'StationChargesAc.starttime',
  //         'StationChargesAc.endtime',
  //         'StationChargesAc.peakkwh',
  //         'StationChargesAc.idlekwh',
  //       ],
  //       timeDimensions: [
  //         {
  //           dimension: 'StationChargesAc.starttime',
  //           granularity: 'day',
  //           dateRange: ['2021-10-01', '2021-10-24'],
  //         },
  //       ],
  //       order: {
  //         'StationChargesAc.id': 'asc',
  //       },
  //       measures: [],
  //     },
  //     chartType: 'table',
  //   },
  // },
  // {
  //   id: 6,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       dimensions: [
  //         'StationChargesAc.id',
  //         'StationChargesAc.idlekwh',
  //         'StationChargesAc.rightSide',
  //       ],
  //       timeDimensions: [
  //         {
  //           dimension: 'StationChargesAc.starttime',
  //           granularity: 'day',
  //           dateRange: ['2021-10-01', '2021-10-24'],
  //         },
  //       ],
  //       order: {
  //         'StationChargesAc.id': 'asc',
  //       },
  //       measures: [],
  //       filters: [
  //         {
  //           member: 'StationChargesAc.rightSide',
  //           operator: 'set',
  //         },
  //       ],
  //     },
  //     chartType: 'table',
  //   },
  // },
  // {
  //   id: 6,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       measures: [
  //         'Peak7EstKwh.Monday',
  //         'Peak7EstKwh.Tuesday',
  //         'Peak7EstKwh.Wednesday',
  //         'Peak7EstKwh.Thursday',
  //         'Peak7EstKwh.Friday',
  //         'Peak7EstKwh.Saturday',
  //         'Peak7EstKwh.Sunday',
  //       ],
  //       timeDimensions: [
  //         {
  //           dimension: 'Peak7EstKwh.starttime',
  //           dateRange: ['2012-06-01', '2012-06-30'],
  //         },
  //       ],
  //       order: {
  //         'Peak7EstKwh.Monday': 'asc',
  //         'Peak7EstKwh.Tuesday': 'asc',
  //         'Peak7EstKwh.Wednesday': 'asc',
  //         'Peak7EstKwh.Thursday': 'asc',
  //         'Peak7EstKwh.Friday': 'asc',
  //         'Peak7EstKwh.Saturday': 'asc',
  //         'Peak7EstKwh.Sunday': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //       dimensions: [],
  //     },
  //     chartType: 'bar',
  //     pivotConfig: {
  //       x: ['measures'],
  //       y: [],
  //     },
  //   },
  // },
  // {
  //   id: 5,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       measures: ['Peak7EstKwh.kwh', 'Idle7EstKwh.kwh'],
  //       timeDimensions: [
  //         {
  //           dimension: 'Peak7EstKwh.starttime',
  //           dateRange: ['2012-06-01', '2012-06-30'],
  //         },
  //       ],
  //       order: [['Peak7EstKwh.dayOfWeek', 'asc']],
  //       limit: 5000,
  //       filters: [],
  //       dimensions: ['Peak7EstKwh.dayOfWeek'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  {
    id: 1,
    name: 'New Chart',
    vizState: {
      query: {
        measures: ['Peak7EstKwh.kwh', 'Idle7EstKwh.kwh'],
        timeDimensions: [
          {
            dimension: 'Peak7EstKwh.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['SequenceOfWeek.id', 'asc']],
        limit: 5000,
        filters: [],
        dimensions: ['Peak7EstKwh.dayOfWeek', 'SequenceOfWeek.id'],
      },
      chartType: 'bar',
    },
  }, // {
  //   id: 1,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       measures: ['Peak24EstKwh.kwh'],
  //       timeDimensions: [
  //         {
  //           dimension: 'Peak24EstKwh.starttime',
  //           dateRange: ['2012-07-01', '2012-07-31'],
  //         },
  //       ],
  //       order: {
  //         'Peak24EstKwh.hourOfDay': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //       dimensions: ['Peak24EstKwh.hourOfDay'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  {
    id: 1,
    name: 'New Chart',
    vizState: {
      query: {
        measures: ['Peak24EstKwh.kwh', 'Idle24EstKwh.kwh'],
        timeDimensions: [
          {
            dimension: 'Peak24EstKwh.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['Peak24EstKwh.hourOfDay', 'asc']],
        limit: 5000,
        filters: [],
        dimensions: ['Peak24EstKwh.hourOfDay'],
      },
      chartType: 'bar',
    },
  },
  {
    id: 2,
    name: 'New Chart',
    vizState: {
      query: {
        measures: ['StationChargesAc.kWh'],
        timeDimensions: [
          {
            dimension: 'StationChargesAc.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: {
          'StationChargesAc.kWh': 'desc',
        },
        limit: 5000,
        filters: [],
        dimensions: ['ChargingStation.organisation'],
      },
      chartType: 'pie',
    },
  },
  {
    id: 3,
    name: 'New Chart',
    vizState: {
      query: {
        measures: ['Peak7EstKwh.kwh', 'Idle7EstKwh.kwh'],
        timeDimensions: [
          {
            dimension: 'Peak7EstKwh.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['Peak7EstKwh.dayOfWeek', 'asc']],
        limit: 5000,
        filters: [],
        dimensions: ['Peak7EstKwh.dayOfWeek'],
      },
      chartType: 'bar',
    },
  },
];

const DashboardPage = () => {
  const dashboardItem = (item) => (
    <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: 'center',
        padding: 12,
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
