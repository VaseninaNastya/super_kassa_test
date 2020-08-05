const buttonReducer = (state={}, action)=>{
    console.log('редьюсер работает', action);
    switch (action.type){
        case 'CHANGE_STATE':
            return{
                ...state,
                chosen: !state.chosen,
            }
        default: return state
    }
}


export default buttonReducer;



