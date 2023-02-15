import React from 'react';
import classes from '../../styles/converter.module.css';
import { ICurrencies } from '../../types';

type Props = {
    value: string;
    setValue: (value: string) => void;
    currencies: ICurrencies[];
};

const Select = ({ value, setValue, currencies }: Props) => {
    return (
        <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={classes.converter_select}
        >
            {currencies.map((item: ICurrencies) => (
                <option key={item.Name} value={item.CharCode}>
                    {item.Name}
                </option>
            ))}
        </select>
    );
};

export default Select;
