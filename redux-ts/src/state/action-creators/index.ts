import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions"

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    })
    // https://registry.npmjs.org/-/v1/search?text=react

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      })

      const names = data.objects.map((result: any) => {
        return result.package.name
      })
      console.log(names);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names 
      })
      
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}