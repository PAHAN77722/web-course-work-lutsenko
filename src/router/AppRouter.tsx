import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "./RouterNames";
import HomePage from "../page/HomePage/HomePage";
import CreateDutyPage from "../page/CreateDutyPage/CreateDutyPage";
import AllDutyPage from "../page/AllDutyPage/AllDutyPage";
import HistoryPage from "../page/HistoryPage/HistoryPage";
import DetailedDutyPage from "../page/DetailedDutyPage/DetailedDutyPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.CREATE_DUTY} element={<CreateDutyPage/>}/>
            <Route path={RouterNames.DUTY} element={<AllDutyPage/>}/>
            <Route path={RouterNames.DUTY+"/:id"} element={<DetailedDutyPage/>}/>
            <Route path={RouterNames.HISTORY} element={<HistoryPage/>}/>
            <Route path={"*"} element={<HomePage/>}/>
        </Routes>
    );
};

export default AppRouter;