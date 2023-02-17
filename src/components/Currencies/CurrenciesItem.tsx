import { useContext, useEffect, useState } from 'react';
import { currencyContext } from '../../store/CurrencyContext';
import classes from '../../styles/currencies_list.module.css';
import { ICurrencies } from '../../types';
import CalcTodayCurrency from './CalcTodayCurrency';

type Props = { currency: ICurrencies };

const CurrenciesItem = ({ currency }: Props) => {
    const { baseValues, getBaseValues }: any = useContext(currencyContext);
    console.log(baseValues);

    useEffect(() => {
        getBaseValues();
    }, []);

    if (!Object.keys(baseValues).length) {
        return <div>loading...</div>;
    }

    return (
        <div className={classes.currencies_wrapper}>
            <div className={classes.currencies_first_floor}>
                <div>
                    <span>
                        {currency?.Name} (
                        <span className={classes.currencies_item__numcode}>
                            {currency?.NumCode}
                        </span>
                        ) - {currency?.Value}
                    </span>
                </div>

                <div>
                    <CalcTodayCurrency
                        currency={
                            +(currency?.Value - currency?.Previous).toFixed(4)
                        }
                    />
                </div>
            </div>
            <div className={classes.currencies_second_floor}>
                <div>Based on RUB</div>
                <div>
                    1 RUB = 1 {currency?.CharCode}{' '}
                    {baseValues[currency?.CharCode].toFixed(4)}
                </div>
            </div>
        </div>
    );
};

export default CurrenciesItem;
