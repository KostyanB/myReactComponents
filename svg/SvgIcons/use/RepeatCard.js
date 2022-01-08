import React from 'react';

const RepeatCard = props => {
    let items = [];
    const count = Math.min(props.quantity, props.data?.length);
    for (let i = 0; i <= count - 1; i++) {
        items.push(props.children(i))
    }
    return <>{items}</>
}
export default RepeatCard;
