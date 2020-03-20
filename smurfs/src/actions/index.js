import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';
export const PUT_DATA = 'PUT_DATA';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
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

export const putData = smurfData => dispatch => {
    dispatch({ type: PUT_DATA });
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