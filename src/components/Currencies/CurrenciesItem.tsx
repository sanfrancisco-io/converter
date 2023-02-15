import classes from '../../styles/currencies_list.module.css';
import { ICurrencies } from '../../types';
import CalcTodayCurrency from './CalcTodayCurrency';

type Props = { currency: ICurrencies };

const CurrenciesItem = ({ currency }: Props) => {
    return (
        <div className={classes.currencies_wrapper}>
            <div>
                <span>
                    {currency.Name} (
                    <span className={classes.currencies_item__numcode}>
                        {currency.NumCode}
                    </span>
                    ) - {currency.Value}
                </span>
            </div>

            <div>
                <CalcTodayCurrency
                    currency={+(currency.Value - currency.Previous).toFixed(4)}
                />
            </div>
        </div>
    );
};

export default CurrenciesItem;
