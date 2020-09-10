export const addEmployee = employee => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: {
            employee
        }
    }
}

export const removeEmployee = index => {
    return {
        type: 'REMOVE_EMPLOYEE',
        payload: {
            index
        }
    }
}