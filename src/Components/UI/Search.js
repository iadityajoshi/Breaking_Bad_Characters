import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('');
    const onChangeHandler = (e) => {
        setText(e.target.value);
        getQuery(e.target.value);
    }

  return (
    <div>
      <form >
          <input type="text" className='form-control' placeholder='Search the characters here' 
          value={text}
          onChange={ onChangeHandler }/>
      </form>
    </div>
  )
}

export default Search
