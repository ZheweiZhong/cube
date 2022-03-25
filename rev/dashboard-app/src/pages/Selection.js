import React from "react";
import ReactDOM from "react-dom";
import { Layout, Divider, Empty, Select } from "antd";
import { QueryBuilder } from "@cubejs-client/react";
import { find, propEq } from "ramda";
import cubejs from "@cubejs-client/core";
import "antd/dist/antd.css";
import { useCubeQuery } from "@cubejs-client/react";
import ChartRenderer from "../components/ChartRenderer1";

const cubejsApi = cubejs(
  "2cb745edc05699418955a53119e64c6be4e88caeb1e3072c12fa3fe387b10086d733c273c18b6db87b513599df7159ccd5e8a6ecaa8cfb3847e96cf0c3908f52",
  {
    apiUrl:
      "http://localhost:4000/cubejs-api/v1"
  }
);
// const { resultSet, error, isLoading } = useCubeQuery(query, { cubejsApi });
const Selection = () => (
  <QueryBuilder
    query={{
      timeDimensions: [
        // {
        //   dimension: "LineItems.createdAt",
        //   granularity: "month"
        // }
        {
          dimension: 'WeekCharge.starttime',
          dateRange: ['2012-07-01', '2012-07-31'],
          
        },
      ],
      
    }}
    cubejsApi={cubejsApi}
    render={({ resultSet, measures, availableMeasures, updateMeasures }) => (
      <Layout.Content style={{ padding: "20px" }}>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          onSelect={(m) =>
            updateMeasures.add(find(propEq("name", m))(availableMeasures))
          }
          onDeselect={(m) =>
            updateMeasures.remove(find(propEq("name", m))(availableMeasures))
          }
        >
          {availableMeasures.map((measure) => (
            <Select.Option key={measure.name} value={measure.name}>
              {measure.title}
            </Select.Option>
          ))}
        </Select>

        <Divider />


        {measures.length > 0 ? (
          <ChartRenderer resultSet={resultSet} />
        ) : (
          <Empty description="Select a measure to get started" />
        )}
      </Layout.Content>
    )}
  />
);

export default Selection;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
