import {ChangeEvent} from 'react';
import './search-box.styles.css';


//passing a type parameter to this this type defintion. We're telling this onChnageHandler type that it wil be expecting an input change.
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; 
}

const SearchBox = (props: SearchBoxProps) => {
  const { onChangeHandler, placeholder, className } = props;

  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;

