import { useState } from 'react';

export const usePagesCount = () => {
    const [ pagesCount, setPagesCount ] = useState(0);

    return { pagesCount, setPagesCount }
}