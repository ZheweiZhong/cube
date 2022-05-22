import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "../components/AcStationTable.js";
import Toolbar from "../components/AcToolbar.js";
const useStyles = makeStyles(theme => ({
  root: { padding: 15 },
  content: { marginTop: 15 },
}));

const AcStation = () => {
  const classes = useStyles();
  const tabs = ['All','left','right'];
  const [statusFilter, setStatusFilter] = React.useState(0);
  const [startDate, setStartDate] = React.useState(new Date("2013-07-01T00:00:00"));
  const [finishDate, setFinishDate] = React.useState(new Date("2014-07-01T00:00:00"));
  const [sorting, setSorting] = React.useState(['StationChargesAc.starttime', 'desc']);
  const query = {
    timeDimensions: [
      {
        dimension: 'StationChargesAc.starttime',
        dateRange: [startDate, finishDate],
      },
    ],
        order: {
            [`${sorting[0]}`]: sorting[1]
          },
    dimensions: [
      'StationChargesAc.id',
      'StationChargesAc.stationId',
      'StationChargesAc.side',
      'StationChargesAc.userId',
      'StationChargesAc.kWh',
      'StationChargesAc.starttime',
      'StationChargesAc.endtime',
      'StationChargesAc.peakkwh',
      'StationChargesAc.idlekwh',
    ],
        "filters": [
            {
              "dimension": "StationChargesAc.side",
              "operator": tabs[statusFilter] !== 'All' ? "equals" : "set",
              "values": [
                `${tabs[statusFilter].toLowerCase()}`
              ]
            }
        ]
  };

  return (
    <div className={classes.root}>
      <Toolbar
       statusFilter={statusFilter}
       setStatusFilter={setStatusFilter}
       tabs={tabs}
       startDate={startDate}
       setStartDate={setStartDate}
       finishDate={finishDate}
       setFinishDate={setFinishDate}
      />
      <div className={classes.content}>
        <Table 
          sorting={sorting}
          setSorting={setSorting}
        query={query}/>
      </div>
    </div>
  );
};

export default AcStation;