import classes from '../../styles/converter.module.css';

type Props = {
    value: number;
    setValue: (value: number) => void;
    disabled: boolean;
};

const Input = ({ value, setValue, disabled }: Props) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(+e.target.value)) {
            setValue(+e.target.value);
        }
    };
    return (
        <input
            className={classes.converter_input}
            value={value}
            disabled={disabled}
            onChange={change}
        />
    );
};

export default Input;
