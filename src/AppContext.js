import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');
    const [param3, setParam3] = useState([]);
    const [param4, setParam4] = useState('');
    const [param5, setParam5] = useState('');
    const [param6, setParam6] = useState('');
    const [param7, setParam7] = useState([]);
    const [param8, setParam8] = useState('');

    const updateParams = (newParam1, newParam2, newParam3, newParam4, newParam5, newParam6, newParam7, newParam8) => {
        setParam1(newParam1);
        setParam2(newParam2);
        setParam3(newParam3);
        setParam4(newParam4);
        setParam5(newParam5);
        setParam6(newParam6);
        setParam7(newParam7);
        setParam8(newParam8);
    };

    const contextValue = {
        param1,
        param2,
        param3,
        param4,
        param5,
        param6,
        param7,
        param8,
        updateParams,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};