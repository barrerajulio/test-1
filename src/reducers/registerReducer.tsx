import {
    ADD_REGISTER
} from '../actions'

export default (state = [], action: any) => {
    switch (action.type) {
        case ADD_REGISTER:
            return [
                ...state,
                {
                    country: action.register.country,
                    name: action.register.name,
                    phone: action.register.phone,
                    email: action.register.email
                }
            ];
        default:
            return state
    }
}
