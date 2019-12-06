import {
  REQ_WEATHER_DATA,
  REQ_WEATHER_DATA_SUCCESS,
  REQ_WEATHER_DATA_FAILURE,
} from '../Types';
import axios from 'axios';
import { weatherData } from '../../../Utils/EndPoints';
import { findCoordinates } from '../../../Utils/Location';
import { Constants } from '../../../Utils/Constants';

const getWeatherData = () => async dispatch => {
  dispatch({ type: REQ_WEATHER_DATA });
  try {
    const { latitude, longitude } = await findCoordinates();
    const response = await axios.get(weatherData(latitude, longitude));
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      dispatch({
        type: REQ_WEATHER_DATA_SUCCESS,
        payload: response?.data?.data[0],
      });
    } else {
      dispatch({
        type: REQ_WEATHER_DATA_FAILURE,
        error: 'Request Cuaca gagal',
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_WEATHER_DATA_FAILURE,
      error: 'Request Cuaca gagal',
    });
  }
};

export { getWeatherData };
