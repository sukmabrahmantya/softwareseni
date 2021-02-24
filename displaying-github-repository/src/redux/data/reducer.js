import {
    GET_REPOSITORY,
    RESET_REPOSITORY
} from './actions'

export default (state = {}, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_REPOSITORY.PENDING: 
            return {
                ...state,
                error: "",
                data: ""
            }
        case GET_REPOSITORY.SUCCESS: 
            return {
                ...state,
                data: payload
            }
        case GET_REPOSITORY.ERROR: 
            return {
                ...state,
                error: payload.msg
            }
        case RESET_REPOSITORY.SUCCESS: 
            return {
                ...state,
                data: ""
            }
        default:
            return state
    }
}