import { DELETE_TODO } from '../actions';

const deletingTodoReducer = (state = [], action) => {
    switch (action.type) {
        case DELETE_TODO:    
            return state;
        default:
            return state;
    }
}

export default deletingTodoReducer;