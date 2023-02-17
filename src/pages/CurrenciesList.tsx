import { useContext, useEffect, useState } from 'react';
import { currencyContext } from '../store/CurrencyContext';
import { ICurrencies } from '../types';
import classes from '../styles/currencies_list.module.css';
import { Search } from '../components/Search';
import CurrenciesItem from '../components/Currencies/CurrenciesItem';

type Props = {};

const CurrenciesList = (props: Props) => {
    const { getCurrencies, currencies }: any = useContext(currencyContext);
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        getCurrencies();
    }, []);

    const currencyFilter = (item: ICurrencies) => {
        const filteredItem = item.Name + item.NumCode + item.CharCode;
        if (filteredItem.toLowerCase().includes(value.toLowerCase()))
            return item;
    };

    return (
        <div className={classes.currencies}>
            <Search value={value} setValue={setValue} />
            {currencies.length ? (
                currencies
                    .filter(currencyFilter)
                    .map((item: ICurrencies) => (
                        <CurrenciesItem key={item.ID} currency={item} />
                    ))
            ) : (
                <span>loading...</span>
            )}
        </div>
    );
};

export default CurrenciesList;
