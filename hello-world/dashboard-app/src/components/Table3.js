import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { useCubeQuery } from "@cubejs-client/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from "@material-ui/core";
 import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
 import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  status: {
    marginRight: 15
  },
  actions: {
    justifyContent: "flex-end",
     tableRow: {
         padding: '0 5px',
         cursor: "pointer",
         '.MuiTableRow-root.MuiTableRow-hover&:hover': {
         }
       },
       hoverable: {
         "&:hover": {
           cursor: `pointer`
         }
       },
       arrow: {
         fontSize: 10,
         position: "absolute"
       }
  },
}));

const TableComponent = props => {

  const { className, sorting, setSorting, query, cubejsApi, ...rest } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const tableHeaders = [
    { text: "Estimated Cost 22c", value: "UsageTable.estimatedCost22c" },
    { text: "Estimated Cost Peak-shoulder-offpeak", value: "UsageTable.estimatedCostPso" },
    { text: "Number Of Transactions", value: "UsageTable.numberOfTransactions" },
    { text: "Plugged In Time", value: "UsageTable.pluggedInTime" },
    { text: "Charging Time", value: "UsageTable.chargingTime" },
    { text: "Maintaining Charge Time", value: "UsageTable.maintainingChargeTime" },
    { text: "Average Transaction Time", value: "UsageTable.averageTransactionTime" },
    { text: "Average Charging Transaction Time", value: "UsageTable.averageChargingTransactionTime" },
    { text: "Average Maintaining Charge Transaction Time", value: "UsageTable.averageMaintainingChargeTransactionTime" },
    { text: "Percentage Time In Use", value: "UsageTable.percentageTimeInUse" },
    { text: "Power Used In Peak", value: "UsageTable.powerUsedInPeak" },
    { text: "Power Used In Shoulder", value: "UsageTable.powerUsedInShoulder" },
    { text: "Power Used In Off Peak", value: "UsageTable.powerUsedInOffPeak" },


  ];
  const { resultSet, error, isLoading } = useCubeQuery(query, { cubejsApi });
  if (isLoading) {
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress color="secondary" /></div>;
  }
  if (error) {
    return <pre>{error.toString()}</pre>;
  }
  if (resultSet) {
    let orders = resultSet.tablePivot();

     const handleSetSorting = str => {
        setSorting([str, sorting[1] === "desc" ? "asc" : "desc"]);
       };

    const handlePageChange = (event, page) => {
      setPage(page);
    };
    const handleRowsPerPageChange = event => {
      setRowsPerPage(event.target.value);
    };

    return (
      <Card
        {...rest}
        padding={"0"}
        className={clsx(classes.root, className)}
      >
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead className={classes.head}>
                  <TableRow>
                    {tableHeaders.map((item) => (
                      <TableCell key={item.value + Math.random()}
                       onClick={() => {
                       handleSetSorting(`${item.value}`);
                       }} 
                       className={classes.hoverable}           
                      >
                        <span>{item.text}</span>
                        {/* <Typography
                          className={classes.arrow}
                          variant="body2"
                          component="span"
                        >
                          {(sorting[0] === item.value) ? (sorting[1] === "desc" ? <KeyboardArrowUpIcon/> :
                            <KeyboardArrowDownIcon/>) : null}
                        </Typography> */}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(obj => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={obj["UsageTable.estimatedCost22c"]}
                    >
                      <TableCell>
                        {"$"+obj["UsageTable.estimatedCost22c"]}
                      </TableCell>
                      <TableCell>
                        {"$"+obj["UsageTable.estimatedCostPso"]}
                      </TableCell>
                      <TableCell>
                        {obj["UsageTable.numberOfTransactions"]}
                      </TableCell>
                      <TableCell>
                      {moment(obj["UsageTable.pluggedInTime"]).format("D HH:mm:ss")}
                      </TableCell>
                      <TableCell>
                      {moment(obj["UsageTable.chargingTime"]).format("D HH:mm:ss")}
                      </TableCell>
                      <TableCell>
                      {moment(obj["UsageTable.maintainingChargeTime"]).format("D HH:mm:ss")}
                      </TableCell>
                      <TableCell>
                      {moment(obj["UsageTable.averageTransactionTime"]).format("HH:mm:ss")}
                      </TableCell>
                      <TableCell>
                      {moment(obj["UsageTable.averageChargingTransactionTime"]).format("HH:mm:ss")}
                      </TableCell>
                      <TableCell>
                      {moment(obj["UsageTable.averageMaintainingChargeTransactionTime"]).format("HH:mm:ss")}
                      </TableCell>
                      <TableCell>
                        {obj["UsageTable.percentageTimeInUse"]+"%"}
                      </TableCell>
                      <TableCell>
                        {obj["UsageTable.powerUsedInPeak"]}
                      </TableCell>
                      <TableCell>
                        {obj["UsageTable.powerUsedInShoulder"]}
                      </TableCell>
                      <TableCell>
                        {obj["UsageTable.powerUsedInOffPeak"]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={orders.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </CardActions>
      </Card>
    );
  } else {
    return null
  }
};

TableComponent.propTypes = {
  className: PropTypes.string,
  query: PropTypes.object.isRequired
};

export default TableComponent;