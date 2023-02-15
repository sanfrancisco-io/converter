export interface ICurrencies {
    CharCode: string;
    ID: string;
    Name: string;
    Nominal: number;
    NumCode: string;
    Previous: number;
    Value: number;
}

export interface CalcTodayCurrencyProps {
    currency: number;
}

export interface IBaseValueCurr {
    Name: string;
    Value: number;
}
