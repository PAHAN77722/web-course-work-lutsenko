import React, {FC} from 'react';
import css from "./Title.module.css"

interface TitleProps {
    title:string;
}
const Title:FC<TitleProps> = ({title}) => {
    return (
        <div className={css.title}>
            {title}
        </div>
    );
};

export default Title;