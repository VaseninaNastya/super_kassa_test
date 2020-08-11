import database from "../services/firebase";

const buttonReducer = (state={},  action,)=>{
    switch (action.type){
        case 'CHANGE_STATE':
            database.ref('/button/').set({chosen:!state.chosen});
            return{
                ...state,
                chosen: !state.chosen,
            }
        default: return state
    }
}


export default buttonReducer;



