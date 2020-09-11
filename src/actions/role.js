// import {Store} from '../store';

export const addRole = value => {
    return {
        type: 'ADD_ROLE',
        payload: {
            value
        }
    }
}

export const removeRole = index => {
    // console.log(store.getState().employee)
    return {
        type: 'REMOVE_ROLE',
        payload: {
            index
        }
    }
}

// export const checkEmployeeInRole = index =>{

// }