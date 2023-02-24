import React, { ChangeEvent, useState } from 'react';

const GithubForm = () => {
    const [input, setInput ] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input}/>
                <button type='submit'>조회</button>
            </form>
        </div>
    );
};

export default GithubForm;