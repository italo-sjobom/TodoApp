import { ADD_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            //adicionar um todo          
            const newTodo = {
                id: nextId++,
                text: action.text
            }
            console.log(newTodo)
            return [...state, newTodo]
        default:
            return state;    
    }
}

export default todoListReducer;