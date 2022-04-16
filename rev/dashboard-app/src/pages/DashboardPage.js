import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  // {
  //   id: 1,
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
  //       order: [['SequenceOfWeek.id', 'asc']],
  //       limit: 5000,
  //       filters: [],
  //       dimensions: ['WeekCharge.dayOfWeek', 'SequenceOfWeek.id'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  // {
  //   id: 2,
  //   name: 'kWh Charging and Maintianing Charge by Hour',
  //   vizState: {
  //     query: {
  //       measures: ['DayCharge.energy', 'DayMaintain.energy'],
  //       timeDimensions: [
  //         {
  //           dimension: 'DayCharge.starttime',
  //           dateRange: ['2012-07-01', '2012-07-31'],
  //         },
  //       ],
  //       order: [['DayCharge.hourOfDay', 'asc']],
  //       limit: 5000,
  //       filters: [],
  //       dimensions: ['DayCharge.hourOfDay'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  {
    id: 1,
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
  }, 
  {
    id: 2,
    name: 'Period Energy',
    vizState: {
      query: {
        measures: ['PeriodEnergy.energy'],
        timeDimensions: [
          {
            dimension: 'PeriodEnergy.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: {
          'PeriodEnergy.energy': 'desc',
        },
        dimensions: ['PeriodEnergy.period'],
      },
      chartType: 'pie',
    },
  },
  // {
  //   id: 4,
  //   name: 'Hours Charging and Maintianing Charge by Hour',
  //   vizState: {
  //     query: {
  //       measures: ['WeekMaintainHour.spent', 'WeekChargeHour.spent'],
  //       timeDimensions: [
  //         {
  //           dimension: 'WeekMaintainHour.starttime',
  //           dateRange: ['2012-07-01', '2012-07-31'],
  //         },
  //       ],
  //       order: [['SequenceOfWeek1.id', 'asc']],
  //       limit: 5000,
  //       filters: [],
  //       dimensions: ['WeekChargeHour.dayOfWeek', 'SequenceOfWeek1.id'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  // {
  //   id: 2,
  //   name: 'Period Energy',
  //   vizState: {
  //     query: {
  //       measures: ['PeriodKwh.energy'],
  //       timeDimensions: [
  //         {
  //           dimension: 'PeriodKwh.starttime',
  //           dateRange: ['2012-07-01', '2012-07-31'],
  //         },
  //       ],
  //       order: {
  //         'PeriodKwh.energy': 'desc',
  //       },
  //       dimensions: ['PeriodKwh.period'],
  //     },
  //     chartType: 'pie',
  //   },
  // }, // {
  //   id: 6,
  //   name: 'Hours Charging and Maintianing Charge by Day',
  //   vizState: {
  //     query: {
  //       measures: ['DayChargeHour.spent', 'DayMaintainHour.spent'],
  //       timeDimensions: [
  //         {
  //           dimension: 'DayChargeHour.starttime',
  //           dateRange: ['2012-07-01', '2012-07-31'],
  //         },
  //       ],
  //       order: [['DayChargeHour.hourOfDay', 'asc']],
  //       dimensions: ['DayChargeHour.hourOfDay'],
  //     },
  //     chartType: 'bar',
  //   },
  // },
  {
    id: 3,
    name: 'kWh Charging and Maintianing Charge by Day ',
    vizState: {
      query: {
        measures: ['WeekCharge.energy', 'WeekMaintain.energy'],
        timeDimensions: [
          {
            dimension: 'WeekCharge.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['WeekCharge.day_number', 'asc']],
        filters: [],
        dimensions: ['WeekCharge.day_of_week', 'WeekCharge.day_number'],
      },
      chartType: 'bar',
    },
  },
  {
    id: 4,
    name: 'Hours Charging and Maintianing Charge by Hour',
    vizState: {
      query: {
        measures: ['WeekChargeHour.hours', 'WeekMaintainHour.hours'],
        timeDimensions: [
          {
            dimension: 'WeekChargeHour.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['WeekChargeHour.day_number', 'asc']],
        dimensions: ['WeekChargeHour.day_of_week', 'WeekChargeHour.day_number'],
      },
      chartType: 'bar',
    },
  },
  {
    id: 5,
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
        order: [['DayCharge.hour', 'asc']],
        dimensions: ['DayCharge.hour'],
      },
      chartType: 'bar',
    },
  },
  {
    id: 6,
    name: 'kWh Charging and Maintianing Charge by Day',
    vizState: {
      query: {
        measures: ['DayChargeHour.spent', 'DayMaintainHour.spent'],
        timeDimensions: [
          {
            dimension: 'DayChargeHour.starttime',
            dateRange: ['2012-07-01', '2012-07-31'],
          },
        ],
        order: [['DayChargeHour.hour_on', 'asc']],
        dimensions: ['DayChargeHour.hour_on'],
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
