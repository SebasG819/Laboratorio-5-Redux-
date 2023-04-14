import { interWar } from "./data";
export type Observed = ({ render:() => void} & HTMLElement);

export type AppState ={
    Person: interWar[]
}

export enum StarWarAction {
    "GET" = "GET",
}

export interface GetStarWarAction{
    action:StarWarAction.GET,
    payload: interWar[]
}

export type Actions = GetStarWarAction;