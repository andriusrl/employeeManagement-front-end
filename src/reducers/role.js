const initialState = {
    roleData: []
}

const role = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ROLE': {
            console.log("Entrou no redux "+action.payload.value)
            return {
                roleData: [...state.roleData, action.payload.value]
            }
        };
        default:
            return state;
    }
}

export default role;