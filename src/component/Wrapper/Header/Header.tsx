import React from 'react';
import css from "./Header.module.css"
import logo from "../../../assets/logo.png"
import MyLink from "../../MyLink/MyLink";
import {RouterNames} from "../../../router/RouterNames";

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logoContainer}>
                <img src={logo} className={css.logo} alt=""/>
                <span>Веб-Портал нарядів</span>
            </div>

            <div className={css.linkContainer}>
                <MyLink to={RouterNames.HOME}>Головна сторінка</MyLink>
                <MyLink to={RouterNames.CREATE_DUTY}>Назначити наряд</MyLink>
                <MyLink to={RouterNames.DUTY}>Переглянути дійсні наряди</MyLink>
                <MyLink to={RouterNames.HISTORY}>Переглянути історію</MyLink>
            </div>
        </div>
    );
};

export default Header;