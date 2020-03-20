import React from 'react';
import { connect } from 'react-redux';

const SmurfsList = props => {
    return (
        <div>
            {props.error ? (
                <div>{props.error}</div>
            ) : (
            props.smurfs.map(smurf => <div>{smurf}</div>)
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(SmurfsList);