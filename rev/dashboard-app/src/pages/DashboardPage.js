import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  {
    id: 1,
    name: 'kWh Charging and Maintianing Charge by Day',
    vizState: {
      query: {
        measures: ['WeekCharge.energy', 'WeekMaintain.energy'],
        timeDimensions: [
          {
            dimension: 'WeekCharge.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['SequenceOfWeek.id', 'asc']],
        limit: 5000,
        filters: [],
        dimensions: ['WeekCharge.dayOfWeek', 'SequenceOfWeek.id'],
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
    id: 2,
    name: 'kWh Charging and Maintianing Charge by Hour',
    vizState: {
      query: {
        measures: ['DayCharge.energy', 'DayMaintain.energy'],
        timeDimensions: [
          {
            dimension: 'DayCharge.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['DayCharge.hourOfDay', 'asc']],
        limit: 5000,
        filters: [],
        dimensions: ['DayCharge.hourOfDay'],
      },
      chartType: 'bar',
    },
  },
  {
    id: 3,
    name: 'Energy Supply by Stations',
    vizState: {
      query: {
        measures: ['StationChargesAc1.kWh'],
        timeDimensions: [
          {
            dimension: 'StationChargesAc1.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: {
          'StationChargesAc1.kwh': 'desc',
        },
        limit: 5000,
        filters: [],
        dimensions: ['ChargingStation.organisation'],
      },
      chartType: 'pie',
    },
  }, // {
  //   id: 3,
  //   name: 'kWh Charging and Maintianing Charge by Day',
  //   vizState: {
  //     query: {
  //       measures: ['WeekCharge.energy', 'WeekMaintain.energy'],
  //       timeDimensions: [
  //         {
  //           dimension: 'WeekCharge.starttime',
  //           dateRange: ['2012-07-01', '2012-07-31'],
  //         },
  //       ],
  //       order: [['WeekCharge.dayOfWeek', 'asc']],
  //       limit: 5000,
  //       filters: [],
  //       dimensions: ['WeekCharge.dayOfWeek'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  {
    id: 4,
    name: 'Hours Charging and Maintianing Charge by Hour',
    vizState: {
      query: {
        measures: ['WeekMaintainHour.spent', 'WeekChargeHour.spent'],
        timeDimensions: [
          {
            dimension: 'WeekMaintainHour.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['SequenceOfWeek1.id', 'asc']],
        limit: 5000,
        filters: [],
        dimensions: ['WeekChargeHour.dayOfWeek', 'SequenceOfWeek1.id'],
      },
      chartType: 'bar',
    },
  },
   // {
  //   id: 6,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       measures: [],
  //       timeDimensions: [],
  //       order: {
  //         'UsageTable.estimatedCost22c': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //       dimensions: [
  //         'UsageTable.estimatedCost22c',
  //         'UsageTable.estimatedCostPso',
  //         'UsageTable.numberOfTransactions',
  //         'UsageTable.powerUsedInPeak',
  //         'UsageTable.powerUsedInShoulder',
  //         'UsageTable.powerUsedInOffPeak',
  //         'UsageTable.percentageTimeInUse',
  //       ],
  //     },
  //     chartType: 'table',
  //   },
  // },
  // {
  //   id: 7,
  //   name: 'New Chart',
  //   vizState: {
  //     query: {
  //       measures: [],
  //       timeDimensions: [],
  //       order: {
  //         'UsageTable.estimatedCost22c': 'asc',
  //       },
  //       limit: 5000,
  //       filters: [],
  //       dimensions: [
  //         'UsageTable.pluggedInTime',
  //         'UsageTable.chargingTime',
  //         'UsageTable.maintainingChargeTime',
  //         'UsageTable.averageTransactionTime',
  //         'UsageTable.averageChargingTransactionTime',
  //         'UsageTable.averageMaintainingChargeTransactionTime',
  //         'UsageTable.percentageTimeInUse',
  //       ],
  //     },
  //     chartType: 'table',
  //   },
  // },
  {
    id: 8,
    name: 'Period Energy',
    vizState: {
      query: {
        measures: ['PeriodKwh.energy'],
        timeDimensions: [
          {
            dimension: 'PeriodKwh.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: {
          'PeriodKwh.energy': 'desc',
        },
        dimensions: ['PeriodKwh.period'],
      },
      chartType: 'pie',
    },
  },
  {
    id: 6,
    name: 'Hours Charging and Maintianing Charge by Day',
    vizState: {
      query: {
        measures: ['DayChargeHour.spent', 'DayMaintainHour.spent'],
        timeDimensions: [
          {
            dimension: 'DayChargeHour.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['DayChargeHour.hourOfDay', 'asc']],
        dimensions: ['DayChargeHour.hourOfDay'],
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
