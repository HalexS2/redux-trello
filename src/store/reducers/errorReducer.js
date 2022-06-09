
const initialState = {
    errorDisplay: false,
    errorMessage: ''
}

const errorReducer = (state= initialState, action) => {
console.log(state)
switch(action.type){
    case 'error/setError':
        if(action.payload){
            return {...state, errorDisplay: action.payload}
        }else{
            return {...state, errorDisplay: action.payload, errorMessage: ''}
        }
    case 'error/setErrorMessage':
        console.log(state)
        return{...state, errorMessage: action.payload}   
        
    default:
        return state
}

}

export default errorReducer