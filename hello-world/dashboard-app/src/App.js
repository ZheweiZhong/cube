import './body.css';
import React from 'react';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from './theme';
import 'typeface-roboto'
import palette from "./theme/palette";
import { Main } from './layouts'
const API_URL = 'http://localhost:4000';
const CUBEJS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzIxNDY2NDMsImV4cCI6MTYzMjIzMzA0M30.SYp5UnH14bHNFrnXQIX8O_hi66drdLIrBcoDW8k_log';
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`,
});
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '-8px',
    backgroundColor: palette.primary.light,
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <div className={classes.root}>
          <div>{children}</div>
        </div>
      </Main>
    </ThemeProvider>
  );
};

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>
);

export default App;
