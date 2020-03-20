import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const SmurfsForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <div>
            {props.isFetchingData ? (
                <div>Smurftastic</div>
            ) : (
                <button onClick={handleGetData}>Add A Smurf</button>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { })(SmurfsForm);