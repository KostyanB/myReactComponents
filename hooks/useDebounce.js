import React, { useDebounce } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";
// npm i awesome-debounce-promise --save

const debounceAction = (actionFunc, delay) =>
    AwesomeDebouncePromise(actionFunc, delay);

    function useDebounce(func, delay) {
    const debouncedFunction = useMemo(() => debounceAction(func, delay), [ delay, func ]);

    return debouncedFunction;
}

// use in UI

const callAPI = async (value) => {
    // вызов “дорогого” API
};

export default function Client() {
    const debouncedAPICall = useDebounce(callAPI, 500);

    const handleInputChange = async (e) => {
        debouncedAPICall(e.target.value);
    };

    return (
        <form>
            <input type="text" onChange={handleInputChange} />
        </form>
    );
}