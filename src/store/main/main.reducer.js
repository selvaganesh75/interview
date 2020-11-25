import mainConstant from "./main.constant";

const initialState = {
  notes: [],
};

export default function mainReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === mainConstant.REMOVE_NOTE_SUCCESS) {
    newState.notes = action.payload;
  }
  if (action.type === mainConstant.ADD_NOTE_SUCCESS) {
    newState.notes = action.payload;
  }

  return newState;
}
