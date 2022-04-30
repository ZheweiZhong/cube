import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import { Profile, SidebarNav } from './components';
import EvStationIcon from '@material-ui/icons/EvStation';
import EvStationOutlinedIcon from '@material-ui/icons/EvStationOutlined';
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(4, 0, 1),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
    },
    // {
    //   title: 'Maps',
    //   href: '/maps',
    //   icon: <MapIcon />,
    // },
    {
      title: 'AC-station',
      href: '/acstation',
      icon: <EvStationIcon />,
    },
    {
      title: 'DC-station',
      href: '/dcstation',
      icon: <EvStationOutlinedIcon />,
    },
    // {
    //   title: 'Usage Table',
    //   href: '/usagetable',
    //   icon: <DataUsageIcon />,
    // },
  ];

  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant={variant}>
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
