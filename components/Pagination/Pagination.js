import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { usePagesCount } from './hooks/usePagesCount';
//components
import Container from './Styled/Container';
import PrevBlock from './Components/PrevBlock';
import NextBlock from './Components/NextBlock';
import PagesBlock from './Components/PagesBlock';
//styled
const Wrapper = styled(Container)`
    margin-top: 10px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: max-content auto max-content;
    grid-template-areas: "prev pag next";

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, max-content);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: "pag pag" "prev next";
        column-gap: 20px;
    }
`;

const Pagination = props => {
    const { elemOnPage, elemsCount } = props;
    const { setPagesCount } = usePagesCount();
    const [ showPagination, setShowPagination ] = useState(false);

    useEffect(() => {
        if (elemsCount > elemOnPage) {
            setPagesCount(Math.ceil(elemsCount / 10));
            setShowPagination(true);
        } else {
            setShowPagination(false);
        }
    }, [elemsCount, elemOnPage]);

	return (
        <>
        {showPagination &&
            <Wrapper>
                <PrevBlock/>
                <PagesBlock pagesCount={pagesCount}/>
                <NextBlock pagesCount={pagesCount}/>
            </Wrapper>
        }
        </>
	);
}
export default Pagination;