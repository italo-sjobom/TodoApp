import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions';

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
            return [...state, newTodo]
        case UPDATE_TODO:
            return state.map(todo => { 
                if(todo.id === action.todo.id) {
                    return action.todo;
                }
                return todo;
            });
        case TOGGLE_TODO:
            action.todoId
            return state.map(todo => {
				if (todo.id === action.todoId){
                    return {
						...todo,
						done: !todo.done
                    };
                }    
				return todo;
            }); 
        case DELETE_TODO:
            var removeTodo = state.map(function(item){
                return item.id;
            }).indexOf(action.todo.id);

            state.splice(removeTodo, 1);

            return state;
        default:
            return state;    
    }
}

export default todoListReducer;