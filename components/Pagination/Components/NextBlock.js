import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//hooks
import { usePagesCount } from '../hooks/usePagesCount';
import { useActivePage } from '../hooks/useActivePage';
//components
import Button from '../Styled/ButtonPagination';
import BtnBlock from '../Styled/BtnBlock';
//styled
const NextWrap = styled(BtnBlock)`
    grid-area: next;
`;

const NextBlock = () => {
    const [ disableNext, setDisableNext ] = useState(false);
    const { pagesCount } = usePagesCount();
    const { activePage, setActivePage } = useActivePage();

    useEffect(() => {
        const isNextDisable = (activePage === pagesCount) ? true : false;
        setDisableNext(isNextDisable);
    }, [activePage, pagesCount]);

    const showNext = () => {
        const newPage = activePage + 1;
        setActivePage(newPage);
    };

    const showLast = () => setActivePage(pagesCount);

	return (
        <NextWrap>
            <Button onClick={showNext}
                disabled={disableNext}
            >
                Next
            </Button>
            <Button onClick={showLast}
                disabled={disableNext}
            >
                Last
            </Button>
        </NextWrap>
	);
}
export default NextBlock;