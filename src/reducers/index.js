import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import editingTodoReducer from './editingTodoReducer';
import deletingTodoReducer from './deletingTodoReducer';

const rootReducer = combineReducers({
    todos: todoListReducer,
    editingTodo: editingTodoReducer,
    deletingTodo: deletingTodoReducer
});

export default rootReducer;