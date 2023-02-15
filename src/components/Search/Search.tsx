import classes from './search.module.css';

type Props = { value: string; setValue: (value: string) => void };

const Search = ({ value, setValue }: Props) => {
    return (
        <input
            placeholder='search...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={classes.input}
        />
    );
};

export default Search;
