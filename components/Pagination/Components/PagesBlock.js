import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
//hooks
import { usePagesCount } from '../hooks/usePagesCount';
import { useActivePage } from '../hooks/useActivePage';
//components
import RepeatItem from './RepeatItem';
//styled-var
const {
    mainColor,
    activeColor
} = env.style.pagination;
//styled
const PagesWrap = styled.div`
    grid-area: pag;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-left: 20px;
    padding-right: 20px;
`;
const Item = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: ${props => props.color};
`;

const PagesBlock = () => {
    const { pagesCount } = usePagesCount();
    const { activePage, setActivePage } = useActivePage();

	return (
        <PagesWrap>
            <RepeatItem count={pagesCount}
                activePage={activePage}
            >
                {({ index, otherProps }) => (
                    <Item key={index}
                        color={(index === otherProps.activePage) ? activeColor : mainColor}
                        onClick={() => setActivePage(index)}
                    >
                        {index}
                    </Item>
                )}
            </RepeatItem>
        </PagesWrap>
	);
}
export default PagesBlock;