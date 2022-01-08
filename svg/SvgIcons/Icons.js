import React from "react";
import IconsSVG from "./icons.svg";

const Icons = ({
    name,
    fill,
    stroke,
    width,
    height,
    className
}) => {
    return (
    <svg
        className={`icon icon-${name} ${className}`}
        fill={fill}
        stroke={stroke}
        width={width}
        height={height}
    >
        <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
    );
};
export default Icons;