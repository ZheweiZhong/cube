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
function decimalPlace(a){
a=Number(a);
var b = a.toFixed(2)
return b;
}

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
  var mDisplay = m > 0 ? m + (m = 1 ? ":" : ":") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
  }
const TableComponent = props => {
  

  const { className, sorting, setSorting, query, cubejsApi, ...rest } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const tableHeaders = [
    { text: "Plug in time", value: "UsageTime.plug_in_time" },
    { text: "Charge time", value: "UsageTime.charge_time" },
    { text: "Maintian time", value: "UsageTime.maintain_time" },
    { text: "Power Peak", value: "UsageEnergy.peak" },
    { text: "Power Off Peak", value: "UsageEnergy.offpeak" },
    { text: "Estimated Cost Peak", value: "UsageEnergy.estimatedCostPeak" },
    { text: "Estimated Cost Off Peak", value: "UsageEnergy.estimatedCostPeakOffPeak" },
    { text: "Estimated Cost", value: "" },
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
                      // key={obj["Usage.plug_in_time"]}
                    >
                      <TableCell>
                        {secondsToDhms(obj["UsageTime.plug_in_time"])}
                      </TableCell>
                      <TableCell>
                        {secondsToDhms(obj["UsageTime.charge_time"])}
                      </TableCell>
                      {/* <TableCell>
                        {"$"+obj["UsageTable.estimatedCostPso"]}
                      </TableCell> */}
                      <TableCell>
                        {secondsToDhms(obj["UsageTime.maintain_time"])}
                      </TableCell>
                      {/* <TableCell>
                      {moment(obj["UsageTable.pluggedInTime"]).format("D HH:mm:ss")}
                      </TableCell> */}
                      <TableCell>
                        {decimalPlace(obj["UsageEnergy.peak"])+"kWh"}
                      </TableCell>
                      <TableCell>
                        {decimalPlace(obj["UsageEnergy.offpeak"])+"kWh"}
                      </TableCell>
                      <TableCell>
                        {"$"+decimalPlace(obj["UsageEnergy.estimatedCostPeak"])}
                      </TableCell>
                      <TableCell>
                        {"$"+decimalPlace(obj["UsageEnergy.estimatedCostOffPeak"])}
                      </TableCell>
                      <TableCell>
                        {"$"+decimalPlace(obj["UsageEnergy.estimatedCostPeak"]+obj["UsageEnergy.estimatedCostOffPeak"])}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        {/* <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={orders.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </CardActions> */}
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