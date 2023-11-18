import React, {FC, ReactNode} from 'react';
import css from "./LayoutBlock.module.css"

interface BlockProps extends React.HTMLProps<HTMLElement> {
    children:ReactNode;
}

const LayoutBlock:FC<BlockProps> = ({children, className}) => {
    return (
        <div className={`${css.container} ${className}`}>
            {children}
        </div>
    );
};

export default LayoutBlock;