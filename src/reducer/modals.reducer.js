
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {...state, isOpen: true, id: action.payload.id}
        case 'CLOSE_MODAL':
            return {isOpen: false}
        default:
            return state;

    }
}

export default reducer;