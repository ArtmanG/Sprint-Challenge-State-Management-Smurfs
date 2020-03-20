import React, { useState } from 'react';
import { connect } from 'react-redux';
import { putData } from '../actions';

const SmurfsForm = props => {
    const [smurfData, setSmurfData] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    });

    const handleChange = e => {
        setSmurfData({
            ...smurfData, [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSmurfData({...smurfData});
        props.putData(smurfData);
        setSmurfData({name: '', age: '', height: '', id: ''})
        
    }

    return (
        <div>
            {props.isPostingData ? (
                <div>Smurftastic</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={smurfData.name}
                        onChange={handleChange}
                        placeholder='Name'
                    />

                    <input
                        type='text'
                        name='age'
                        value={smurfData.age}
                        onChange={handleChange}
                        placeholder='Age'
                    />

                    <input
                        type='text'
                        name='height'
                        value={smurfData.height}
                        onChange={handleChange}
                        placeholder='Height'
                    />
                    <input type='submit' />
                </form>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isPostingData: state.isPostingData
    }
}

export default connect(mapStateToProps, { putData })(SmurfsForm);