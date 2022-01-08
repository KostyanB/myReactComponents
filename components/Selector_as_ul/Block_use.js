import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Context } from '../Functions/Context';
import Label from './Label';
import Selector from '../Selector';

// styled
const Wrapper = styled.div`
    padding-left: clamp(20px ,7vw, 95px);

    @media (max-width: 1140px) {
        padding-left: 0px;
    }
    @media (max-width: 1024px) {
        grid-row: 2;
    }
`;
const CinemaWrap = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    width: 470px;
`;
//************************************** */
const CinemaBlock = () => {
    const cinemas = env.calendar.cinemas;

    const {
        calendar: { activeCinema, setActiveCinema },
        selectors: { openSelectorCinema, closeCinema, closeSession, toggleCinema },
    } = useContext(Context);

    const handleSelectedCinema = value => {
        closeCinema();
        setActiveCinema(value);
    };

    const handleCinemaSelectors = () => {
        toggleCinema();
        closeSession();
    };

    return (
        <Wrapper>
            <Label>Кинотеатр</Label>
            <CinemaWrap>
                <Selector items={cinemas}
                    handleSelector={handleSelectedCinema}
                    handleBtn={handleCinemaSelectors}
                    isOpen={openSelectorCinema}
                    title={activeCinema}
                />
            </CinemaWrap>
        </Wrapper>
    )
};
export default CinemaBlock;