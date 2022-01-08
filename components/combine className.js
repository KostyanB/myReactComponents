import React from 'react';
// склейка классов через пропсы
const SelectButton = ({ className, title, handle }) => {
    // const { className, title, handle } = props;
    const classes = `select-btn ${className}`;

    return (
        <button className={classes} onClick={handle}>{title}</button>
    );
}
export default SelectButton;