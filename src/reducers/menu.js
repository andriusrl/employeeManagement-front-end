const initialState = {
    status: true
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENU_STATUS': {
            console.log("boo " + action.payload.value)
            return {
                status: action.payload.value
            }
        };
        default:
            return state;
    }
}

export default menu;