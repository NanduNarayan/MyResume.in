
import { EDUCATION_UPDATE, PERSONAL_UPDATE, PROFESSION_UPDATE, EXPERIENCES_UPDATE } from "./actionTypes"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, { type, payload }) => {
    //console.log(state.personal)
    switch (type) {
        case PERSONAL_UPDATE:
            return{
               ...state,
               personal:{
                ...payload
               } 
            }
        case EDUCATION_UPDATE:
            const updates=payload.map(item=>item);
            const updatedState=structuredClone(state);
            updatedState.education=[...updates]
            return{
                ...updatedState
            }
        case PROFESSION_UPDATE:
            const stateClone=structuredClone(state);
            stateClone.profession={...payload};
            return{
                ...stateClone
            }
        case EXPERIENCES_UPDATE:
            return{
                ...state,
                experiences:[...payload]
            }
            
        default: return (state);
    }
}
