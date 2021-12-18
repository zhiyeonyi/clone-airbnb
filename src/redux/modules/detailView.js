import { createAction, handleActions } from "redux-actions";
import { apis } from "../../shared/api";
import axios from "axios";
import { create } from "lodash";

const LOAD ="detailView/LOAD";

const loadDetailView = createAction(LOAD, (detailView) => ({ detailView }));

const initialState = {
    list: [
        {
          username: 123,
          comments: [
            {
              username: "yjy39k",
              commentcontent: "asdasd",
            },
          ],
        },
      ],
      is_loading: false,
}

export const _loadDetailView =
  (accomoId) =>
  async (dispatch, getState, { history }) => {
    const { data } = await apis.getDetail(accomoId);
    dispatch(loadDetailView(data));
};

export default handleActions(
    {
      [LOAD]: (state, action) => {
        return {
          ...state,
          list: action.payload.detailView,
        };
      },
    },
    initialState
);