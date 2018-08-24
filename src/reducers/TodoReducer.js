import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionTypes';

const INITIAL_DATA = []

const TodoReducer = (state=INITIAL_DATA, action) => {
    //console.log(state);
    switch(action.type)
    {
        case ADD_TODO:
        //console.log("i am in reducer" + JSON.stringify(state));
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case TOGGLE_TODO: 
        //console.log("in toggle");
            return state.map(todo => 
            (todo.id === action.id) ? {...todo, completed: !todo.completed}:todo
        )
        case REMOVE_TODO:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
        default:
            return state;
    }
}

export default TodoReducer;