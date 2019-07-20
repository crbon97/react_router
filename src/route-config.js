import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Notfound from './components/Notfound';
import CourseList from './components/CourseList';
import LeaveMe from './components/LeaveMe';
import Admin from './components/Admin';
import Test from './components/test';
const routes = [
    { 
        path: '/',
        exact: true,
        main: ({location}) => <Home location={location}  />
    },
    { 
        path: '/about',
        exact: true,
        main: (props) => <About {...props}/>
    },
    { 
        path: '/course',
        exact: false,
        main: ({match}) => <CourseList match={match} />
    },
    { 
        path: '/leave-me',
        exact: false,
        main: () => <LeaveMe  />
    },
    { 
        path: '/admin/:id',
        exact: true,
        main: ({match, location}) => <Admin match={match} location={location} />
    },
    { 
        path: '/test',
        exact: true,
        main: (props) => <Test {...props} />
    },
    { 
        path: '',
        exact: true,
        main: () => <Notfound />
    },
];

export default routes;

// import { createBrowserHistory } from "history";
// const hist = createBrowserHistory();
// <Router history={hist}></Router>