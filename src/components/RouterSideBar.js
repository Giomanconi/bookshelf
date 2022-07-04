import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BookPanel from './BookPanel';
import BookSearchPanel from './BookSearchPanel';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import BookIcon from '@material-ui/icons/Book';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BaseListItemLink from './custom/BaseListItemLink';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: 'white',
    backgroundColor: '#3f5a72'
  },
  toolbar: theme.mixins.toolbar
}));

const RouterSideBar = () => {
  const classes = useStyles();
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Bookshelf</h2>
    },
    {
      path: "/add-book",
      main: () => <main class='main-add'><BookPanel title='Add Book'/></main>
    },
    {
      path: "/search-books",
      main: () => <main class='main-search'><BookSearchPanel/></main>
    }
  ];

  return (
    <Router>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <BaseListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <BaseListItemLink to="/add-book" primary="Add book" icon={<BookIcon />} />
          <BaseListItemLink to="/search-books" primary="Search books" icon={<SearchIcon />} />
        </List>
        <Divider />
      </Drawer>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default RouterSideBar;