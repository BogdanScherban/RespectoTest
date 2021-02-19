import React  from 'react';
import { useLocation } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  tabLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "none",
  }
});

const components = [
    { key: 'devices',       label: 'Devices',       href: '/', },
    { key: 'reservations',  label: 'Reservations',  href: '/reservations', },
];

const Navigation = ({ children }) => {
    const location = useLocation();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth='xl'>
                <Tabs
                    value={location.pathname}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {components.map(item => (
                        <Tab key={item.key}
                             value={item.href}
                             label={item.label}
                             className={classes.tabLink}
                             component={Link}
                             href={item.href}
                        />
                    ))}
                </Tabs>
                {children}
            </Container>
        </div>
    );
};

export default Navigation;
