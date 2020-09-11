export const addEmployee = employee => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: {
            employee
        }
    }
}

export const removeEmployee = index => {
    console.log("chegou aqui no redux assim")
    console.log(index)
    return {
        type: 'REMOVE_EMPLOYEE',
        payload: {
            index
        }
    }
}