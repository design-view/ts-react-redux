import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';

const GithubContainer = () => {
    const { loading, data, error} = useSelector((state:rootState)=> state.github.userProfile)
    const dispatch = useDispatch();
    const onClickUsername = (username: string) => {
       
    }
    return (
        <div>
            
        </div>
    );
};

export default GithubContainer;