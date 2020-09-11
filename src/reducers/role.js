const initialState =  ["back-end", "front-end", "full-stack", "recrutador"]

const role = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ROLE': {
            console.log("Entrou no redux "+action.payload.value)
            return  [...state, action.payload.value]
        };
        case 'REMOVE_ROLE': {
            return state.filter((role, index)=>{
                return index!==action.payload.index
            })
        };
        default:
            return state;
    }
}

export default role;