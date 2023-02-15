import classes from '../../styles/converter.module.css';

type Props = {
    value: number;
    setValue: (value: number) => void;
    disabled: boolean;
};

const Input = ({ value, setValue, disabled }: Props) => {
    return (
        <input
            className={classes.converter_input}
            type={'number'}
            value={value}
            disabled={disabled}
            onChange={(e) => setValue(+e.target.value)}
        />
    );
};

export default Input;
