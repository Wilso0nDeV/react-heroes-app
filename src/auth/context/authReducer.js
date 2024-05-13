import { types } from "../types/types";


const initialState = {
    logged : false,
}

//*AuthReducer : es mi reducer que ejecutara cada acción que se realice.(login o loggout)
export const authReducer = (state = initialState, action) =>{ 

    switch (action.types) {
        case types.login:
            return {
                ...state,
                logged: true,
                user : action.payload
            };

        case types.logout:
                return {
                    logged: false
                };

        default:
            break;
    }
}