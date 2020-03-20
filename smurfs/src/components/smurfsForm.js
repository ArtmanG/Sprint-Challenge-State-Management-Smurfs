import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

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
        props.addSmurf(smurfData);
        setSmurfData({name: '', age: '', height: '', id: ''})
        
    }

    return (
        <div>
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isPostingData: state.isPostingData
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);