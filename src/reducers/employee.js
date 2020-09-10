const initialState = []

const employees = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE': {
            return [
                ...state, action.payload.employee
            ]
        };
        default:
            return state;
    }
}

export default employees;