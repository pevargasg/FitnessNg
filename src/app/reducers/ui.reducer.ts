import { Action } from "@ngrx/store";
import { UIActions, START_LOADING, STOP_LOADING } from "./ui.actions";

interface State {
    isLoading: false
}
const INITIAL_STATE: State = {
    isLoading: false
}

export function uiReducer(state = INITIAL_STATE, action: UIActions) {
    switch (action.type) {
        case START_LOADING:
            return {
                isLoading: true
            }
        case STOP_LOADING:
            return {
                isLoading: false
            }
        default: {
            return state;
        }
    }
}

export const getIsLoading = (state: State) => state.isLoading;