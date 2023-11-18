import React, {FC} from 'react';
import css from "./MyLink.module.css"
import {Link} from "react-router-dom";

interface LinkProps {
    to: string;
    children: React.ReactNode
}

const MyLink: FC<LinkProps> = ({to, children}) => {
    return (
        <Link className={css.link} to={to}>
            {children}
        </Link>
    );
};

export default MyLink;