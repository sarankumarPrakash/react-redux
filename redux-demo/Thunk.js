const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const FETCH_API_REQUEST = "FETCH_API_REQUEST";
const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
const FETCH_API_FAILURE = "FETCH_API_FAILURE";

const fetchApiRequest = () => ({
  type: FETCH_API_REQUEST,
});

const fetchApiSuccess = (payload) => ({
  type: FETCH_API_SUCCESS,
  payload,
});

const fetchApiFailure = (payload) => ({
  type: FETCH_API_FAILURE,
  payload,
});

const reducers = (state = initialState, action) => {
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
        loading: false,
        error: "",
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchApiRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((data) => data.id);
        dispatch(fetchApiSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchApiFailure(error.message));
      });
  };
};

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUser());