import React from 'react';
import Dashboard from '../containers.js/dashboard';
import Logout from '../containers.js/logout';

const DashboardPage = () => {
    return (
        <>
            <Logout/>
            <Dashboard/>
        </>
    )
}

export default DashboardPage;