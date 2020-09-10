const initialState = {
    employeeData: "Vazio"
}

const employees = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMPLOYEE': {
            return {
                employeeData: "Teste"
            }
        };
        default:
            return state;
    }
}

export default employees;