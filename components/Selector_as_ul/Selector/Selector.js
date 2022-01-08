import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import SelectButton from './SelectButton';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;
const List = styled.ul`
    display: block;
    position: absolute;
    max-height: 79px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background: ${env.colors.selectorFill};
    border: 1px solid ${env.colors.rectangle};
    border-top: none;
    padding: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 8px 18px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${env.colors.orange};
        border-radius: 100px;
    }
`;
const Li = styled.li`
    cursor: pointer;

    &:not(:last-of-type) {
        padding-bottom: 8px;
    }

    &:hover {
        color: ${env.colors.orange};
    }
`;

const Selector = ({ items, isOpen, handleBtn, handleSelector, title }) => {
    // клик вне компонента
    const rootEl = useRef(null);
    useEffect(() => {
        const onClick = e => {
            rootEl.current.contains(e.target) || console.log('клик вне компонента');

        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <Wrapper ref={rootEl}>
            <SelectButton  isOpen={isOpen} handle={handleBtn} title={title}/>
            {isOpen &&
            <List>
                {items.map((item, i) => <Li key={i} id={item} onClick={() => handleSelector(item)}>{item}</Li>)}
            </List>
            }
        </Wrapper>
    );
}
export default Selector;