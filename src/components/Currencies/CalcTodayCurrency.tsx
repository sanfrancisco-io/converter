import { CalcTodayCurrencyProps } from '../../types';
import classes from '../../styles/currencies_list.module.css';
import arrow from '../../assets/arrow.png';

const CalcTodayCurrency = ({ currency }: CalcTodayCurrencyProps) => {
    if (currency > 0) {
        return (
            <div className={classes.currency_positive}>
                <img width={20} height={20} src={arrow} alt='topArrow' />
                <span>{currency}</span>
            </div>
        );
    } else {
        return (
            <div className={classes.currency_negative}>
                <img width={20} height={20} src={arrow} alt='downArrow' />
                <span>{currency}</span>
            </div>
        );
    }
};

export default CalcTodayCurrency;
