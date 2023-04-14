import { Actions, AppState, StarWarAction } from "../types/store";

export const reducer = (currentAction: Actions,currentState:AppState): AppState => {
    const {action, payload} = currentAction;
    console.log(action,payload);
    switch (action) {
        
        case StarWarAction.GET:
            return{
                ...currentState,
                Person:payload
            }
            default:
                return currentState;
    }
}