import {
  REQ_WEATHER_DATA,
  REQ_WEATHER_DATA_SUCCESS,
  REQ_WEATHER_DATA_FAILURE,
} from '../../Actions/Types';

const initialState = {
  actionStatus: '',
  data: {},
  error: '',
  loading: false,
  refreshing: false,
};

const WeatherData = (state = initialState, action) => {
  switch (action.type) {
    case REQ_WEATHER_DATA:
      return {
        ...state,
        actionStatus: REQ_WEATHER_DATA,
        error: '',
        loading: true,
        refreshing: true,
      };
    case REQ_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        actionStatus: REQ_WEATHER_DATA_SUCCESS,
        data: action.payload,
        loading: false,
        refreshing: false,
      };
    case REQ_WEATHER_DATA_FAILURE:
      return {
        ...state,
        actionStatus: REQ_WEATHER_DATA_FAILURE,
        error: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return { ...state };
  }
};

export { WeatherData };
