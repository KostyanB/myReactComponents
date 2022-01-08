import { useState } from 'react';

export const useActivePage = () => {
    const [ activePage, setActivePage ] = useState(0);

    return { activePage, setActivePage }
}