const initialState = [
    {
        name: "Andrius",
        lastName: "Rocha Lazarino",
        role: "full-stack",
        birth: "1993-12-23",
        salary: "3699",
    },
    {
        name: "Bento",
        lastName: "Silva Sauro",
        role: "front-end",
        birth: "1996-12-23",
        salary: "2399",
    },
    {
        name: "Julio",
        lastName: "Tomarante Goiano",
        role: "full-stack",
        birth: "1992-12-23",
        salary: "6399",
    }
]

const employees = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE': {
            return [
                ...state, action.payload.employee
            ]
        };
        case 'REMOVE_EMPLOYEE': {
            return state.filter((employee, index)=>{
                return index!==action.payload.index
            })
        };
        default:
            return state;
    }
}

export default employees;