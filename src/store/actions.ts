import traer_api from "../services/data";
import { GetStarWarAction, StarWarAction } from "../types/store";

export const getPerson = async (): Promise<GetStarWarAction> => {
    const star = await traer_api();
    return{
        action: StarWarAction.GET,
        payload: star
    }
}