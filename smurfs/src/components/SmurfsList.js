import React from 'react';
import { connect } from 'react-redux';
import { gargamel } from '../actions'

const SmurfsList = props => {

    const handleDelete = id => {
        props.gargamel(id)
    };

    return (
        <div>
            {props.error ? (
                <div>{props.error}</div>
            ) : (
                props.smurfs.map(smurf => (
                    <div key={smurf.name}>
                        <p>{smurf.name}</p>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            
                )
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

export default connect(mapStateToProps, { gargamel })(SmurfsList);