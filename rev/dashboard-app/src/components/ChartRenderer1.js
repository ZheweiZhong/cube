import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const COLORS = [
  "#7DB3FF",
  "#49457B",
  "#FF7C78",
  "#FED3D0",
  "#6F76D9",
  "#9ADFB4",
  "#2E7987"
];

const ChartRenderer = ({ resultSet }) => {
  if (
    resultSet &&
    resultSet.loadResponse.query.measures &&
    resultSet.loadResponse.query.measures.length > 0
  ) {
    return (
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart data={resultSet.chartPivot()}>
          <XAxis dataKey="x" minTickGap={20} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {resultSet.seriesNames().map((s, i) => (
            <Line
              key={s.key}
              dataKey={s.key}
              name={s.title}
              stroke={COLORS[i % COLORS.length]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return "Loading...";
};

export default ChartRenderer;

