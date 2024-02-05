const redux = require("redux");
const createStore = redux.createStore;

const initalState = {
  loading: false,
  data: [],
  error: "",
};

const FETCH_API_REQUEST = "FETCH_API_REQUEST";
const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
const FETCH_API_FAILURE = "FETCH_API_FAILURE";

const fetchapirequest = () => {
  return {
    type: FETCH_API_REQUEST,
  };
};

const fetchapisuccess = () => {
  return {
    type: FETCH_API_SUCCESS,
  };
};

const fetchapifailure = () => {
  return {
    type: FETCH_API_FAILURE,
  };
};

const reducers = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };
  }
};

const store=createStore(reducers)