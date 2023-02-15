import React, { useReducer } from 'react';
import { ICurrencies } from '../types';

export const currencyContext = React.createContext({});

const initialState = {
    currencies: [],
    base_value: null,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'get_currencies':
            return {
                ...state,
                currencies: action.payload,
            };
        case 'get_base_currencies':
            return {
                ...state,
                base_value: action.payload,
            };
        default:
            return state;
    }
};

export const CurrencyContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCurrencies = async () => {
        const response = await fetch(
            'https://www.cbr-xml-daily.ru/daily_json.js'
        );

        const data = await response.json();

        const formatData: ICurrencies[] = Object.values(data.Valute);

        dispatch({
            type: 'get_currencies',
            payload: formatData,
        });
    };

    const getBaseValues = async () => {
        const response = await fetch('https://www.cbr-xml-daily.ru/latest.js');

        const data = await response.json();

        dispatch({
            type: 'get_base_currencies',
            payload: data.rates,
        });
    };

    return (
        <currencyContext.Provider
            value={{
                getCurrencies,
                currencies: state.currencies,
                getBaseValues,
                baseValues: state.base_value,
            }}
        >
            {children}
        </currencyContext.Provider>
    );
};
