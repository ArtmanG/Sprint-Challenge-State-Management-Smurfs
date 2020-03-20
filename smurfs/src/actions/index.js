import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF'

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data});
        })
        .catch(err => {
            console.log('error fetching data from api, err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error fetching data from api, err: ' })
        });
};

export const addSmurf = smurfData => dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
        .post('http://localhost:3333/smurfs', smurfData)
        .then(res => {
            dispatch({ type: UPDATE_SMURFS, payload: res.data})
        })
        .catch(err => {
            console.log('error fetching data from api, err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error fetching data from api, err: ' })
        });
}

export const gargamel = id => dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({ type: UPDATE_SMURFS, payload: res.data})
        })
        .catch(err => {
            console.log('error fetching data from api, err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error fetching data from api, err: ' })
        });
}