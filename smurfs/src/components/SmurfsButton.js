import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfsForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getSmurfs();
    };
    return (
        <div>
            <button onClick={handleGetData}>See Your Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfsForm);