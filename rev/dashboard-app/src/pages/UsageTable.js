import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "../components/Table3.js";
import Toolbar from "../components/Toolbar.js";
const useStyles = makeStyles(theme => ({
  root: { padding: 15 },
  content: { marginTop: 15 },
}));

const DcStation = () => {
  const classes = useStyles();
  // const tabs = ['All', 'Shipped', 'Processing', 'Completed'];
  // const [statusFilter, setStatusFilter] = React.useState(0);
  // const [startDate, setStartDate] = React.useState(new Date("2015-10-22T00:00:00"));
  // const [finishDate, setFinishDate] = React.useState(new Date("2016-10-22T00:00:00"));

  const query = {
    // timeDimensions: [
    //   {
    //     dimension: 'TransactionDc.startTimestamp',
    //     dateRange: [startDate, finishDate],
    //   },
    // ],
    dimensions: [
      'UsageTable.estimatedCost22c',
      'UsageTable.estimatedCostPso',
      'UsageTable.numberOfTransactions',
      'UsageTable.powerUsedInPeak',
      'UsageTable.powerUsedInShoulder',
      'UsageTable.powerUsedInOffPeak',
      'UsageTable.percentageTimeInUse',
      'UsageTable.pluggedInTime',
      'UsageTable.chargingTime',
      'UsageTable.maintainingChargeTime',
      'UsageTable.averageTransactionTime',
      'UsageTable.averageChargingTransactionTime',
      'UsageTable.averageMaintainingChargeTransactionTime',
      'UsageTable.percentageTimeInUse',
    ],
        // "filters": [
        //     {
        //       "dimension": "Orders.status",
        //       "operator": tabs[statusFilter] !== 'All' ? "equals" : "set",
        //       "values": [
        //         `${tabs[statusFilter].toLowerCase()}`
        //       ]
        //     }
        // ]
  };

  return (
    <div className={classes.root}>
      {/* <Toolbar
      //  statusFilter={statusFilter}
      //  setStatusFilter={setStatusFilter}
      //  tabs={tabs}
      //  startDate={startDate}
      //  setStartDate={setStartDate}
      //  finishDate={finishDate}
      //  setFinishDate={setFinishDate}
      /> */}
      <div className={classes.content}>
        <Table query={query}/>
      </div>
    </div>
  );
};

export default DcStation;