import { ADD_TODO, TOGGLE_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            //adicionar um todo          
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            }
            console.log(newTodo)
            return [...state, newTodo]
        case TOGGLE_TODO:
            action.todoId
            return state.map(todo => {
                if(todo.id === action.todoId){
                    // return Object.assign({}, todo, { done: !todo.done })
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
            }) 
        default:
            return state;    
    }
}

export default todoListReducer;