import { Route, Routes } from 'react-router-dom';
import React from "react";
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import UserListPage from '../pages/UserListPage';


export default class MainLayout extends React.Component {

    render() {
        return (
            <div className="thbs-main container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/list" element={<UserListPage />} />
                </Routes>
            </div>
        )
    }
}