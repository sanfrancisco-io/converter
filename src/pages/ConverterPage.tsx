import { useContext, useEffect, useState } from 'react';
import { currencyContext } from '../store/CurrencyContext';
import { ICurrencies } from '../types';
import arrows from '../assets/arrows.png';
import classes from '../styles/converter.module.css';
import { Select } from '../components/Select';
import { Input } from '../components/Input';

type Props = {};

const firstCurrValFromLocal = JSON.parse(
    localStorage.getItem('firstCurrVal') || '1'
);

const fromCurrOptionFromLocal = JSON.parse(
    localStorage.getItem('fromCurrOption') || 'AUD'
);

const secondToValFromLocal = JSON.parse(
    localStorage.getItem('toCurrOption') || 'AZN'
);

const ConverterPage = (props: Props) => {
    const { currencies, getCurrencies }: any = useContext(currencyContext);

    const [firstCurrVal, setFirstCurrVal] = useState<number>(
        +firstCurrValFromLocal
    );
    const [fromCurrOption, setFromCurrOption] = useState(
        fromCurrOptionFromLocal
    );
    const [toCurrOption, setToCurrOption] = useState(secondToValFromLocal);
    const [secondCurrVal, setSecondCurrVal] = useState<number>(1);

    useEffect(() => {
        getCurrencies();
    }, []);

    const converter = (
        fromCurrencyVal: number,
        fromCurrency: string,
        toCurrency: string
    ) => {
        const firstCurrencyObj: ICurrencies = currencies.find(
            (item: ICurrencies) => item.CharCode === fromCurrency
        );

        const secondCurrencyObj: ICurrencies = currencies.find(
            (item: ICurrencies) => item.CharCode === toCurrency
        );

        const oneCurrencyNominal =
            (firstCurrencyObj.Value / firstCurrencyObj.Nominal) *
            fromCurrencyVal;

        const secondOneCurrencyNominal =
            secondCurrencyObj.Value / secondCurrencyObj.Nominal;

        setSecondCurrVal(
            +(oneCurrencyNominal / secondOneCurrencyNominal).toFixed(2)
        );

        localStorage.setItem('fromCurrOption', JSON.stringify(fromCurrOption));
        localStorage.setItem('toCurrOption', JSON.stringify(toCurrOption));
        localStorage.setItem('firstCurrVal', JSON.stringify(firstCurrVal));
    };

    const swapStateBetweenCurrencies = () => {
        const firstCurr = firstCurrVal;
        const firstOptionVal = fromCurrOption;

        setFirstCurrVal(secondCurrVal);
        setFromCurrOption(toCurrOption);

        setSecondCurrVal(firstCurr);
        setToCurrOption(firstOptionVal);
    };

    useEffect(() => {
        const x = setTimeout(
            () => converter(firstCurrVal, fromCurrOption, toCurrOption),
            500
        );

        return () => clearTimeout(x);
    }, [firstCurrVal, fromCurrOption, toCurrOption, currencies.length]);

    return (
        <div className={classes.converter}>
            <div>
                <Select
                    value={fromCurrOption}
                    setValue={setFromCurrOption}
                    currencies={currencies}
                />

                <Input
                    value={firstCurrVal}
                    setValue={setFirstCurrVal}
                    disabled={false}
                />
            </div>

            <div className={classes.arrow_button}>
                <button onClick={swapStateBetweenCurrencies}>
                    <img src={arrows} alt='arrows' />{' '}
                </button>
            </div>

            <div>
                <Select
                    value={toCurrOption}
                    setValue={setToCurrOption}
                    currencies={currencies}
                />

                <Input
                    value={secondCurrVal}
                    setValue={setFirstCurrVal}
                    disabled={true}
                />
            </div>
        </div>
    );
};

export default ConverterPage;
