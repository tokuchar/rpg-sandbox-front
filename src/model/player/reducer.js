const initialState = {
    position: [0, 200],
    shouldRun: {
        east: false,
        west: false,
    }
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVE_PLAYER":
           return {
               ...action.payload
           }
        default:
            return state
    }
}

export default playerReducer
