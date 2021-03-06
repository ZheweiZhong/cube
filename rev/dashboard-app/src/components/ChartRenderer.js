import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from 'recharts';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const CartesianChart = ({ resultSet, children, ChartComponent }) => (
  <ResponsiveContainer width="100%" height={350}>
    <ChartComponent data={resultSet.chartPivot()}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid />
      {children}
      <Legend />
      <Tooltip />
    </ChartComponent>
  </ResponsiveContainer>
);
const colors = ['#6930bf', '#ed3232', '#FAA025','#F585B9','#93FFED','#3BB6FA','#A3FFD5','#76b5c5','#00cccc'
,'#d580ff','#f08237','#00aaff'];
const stackedChartData = (resultSet) => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ', '),
        color: resultSet.axisValuesString(yValues, ', '),
        measure: m && Number.parseFloat(m),
      }))
    )
    .reduce((a, b) => a.concat(b), []);
  return data;
};

const TypeToChartComponent = {
  line: ({ resultSet }) => {
    return (
      <CartesianChart resultSet={resultSet} ChartComponent={LineChart}>
        {resultSet.seriesNames().map((series, i) => (
          <Line
            key={series.key}
            stackId="a"
            dataKey={series.key}
            name={series.title}
            stroke={colors[i]}
          />
        ))}
      </CartesianChart>
    );
  },
  bar: ({ resultSet }) => {
    return (
      <CartesianChart resultSet={resultSet} ChartComponent={BarChart}>
        {resultSet.seriesNames().map((series, i) => (
          <Bar
            key={series.key}
            stackId="a"
            dataKey={series.key}
            name={series.title}
            fill={colors[i]}
          />
        ))}
      </CartesianChart>
    );
  },
  area: ({ resultSet }) => {
    return (
      <CartesianChart resultSet={resultSet} ChartComponent={AreaChart}>
        {resultSet.seriesNames().map((series, i) => (
          <Area
            key={series.key}
            stackId="a"
            dataKey={series.key}
            name={series.title}
            stroke={colors[i]}
            fill={colors[i]}
          />
        ))}
      </CartesianChart>
    );
  },
  pie: ({ resultSet }) => {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            isAnimationActive={false}
            data={resultSet.chartPivot()}
            nameKey="x"
            dataKey={resultSet.seriesNames()[0].key}
            fill="#8884d8"
          >
            {resultSet.chartPivot().map((e, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  number: ({ resultSet }) => {
    return (
      <Typography
        variant="h4"
        style={{
          textAlign: 'center',
        }}
      >
        {resultSet.seriesNames().map((s) => resultSet.totalRow()[s.key])}
      </Typography>
    );
  },
  table: ({ resultSet }) => {
    return (
      <Table aria-label="simple table" width={350} height={350}>
        <TableHead>
          <TableRow>
            {resultSet.tableColumns().map((c) => (
              <TableCell key={c.key}>{c.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resultSet.tablePivot().map((row, index) => (
            <TableRow key={index}>
              {resultSet.tableColumns().map((c) => (
                <TableCell key={c.key}>{row[c.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const renderChart =
  (Component) =>
  ({ resultSet, error, pivotConfig,...props }) =>
    (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} {...props} />) ||
    (error && error.toString()) || <CircularProgress />;

const ChartRenderer = ({ vizState = {} }) => {
  const { query, chartType, ...options } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  const renderProps = useCubeQuery(query);
  return component && renderChart(component)({ ...options, ...renderProps });
};



export default ChartRenderer;
