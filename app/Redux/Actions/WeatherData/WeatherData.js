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
    const response = await axios.get(weatherData);
    console.log('hasil res', response);
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      dispatch({
        type: REQ_WEATHER_DATA_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      dispatch({
        type: REQ_WEATHER_DATA_FAILURE,
        error: 'Request Cuaca gagal',
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: REQ_WEATHER_DATA_FAILURE,
      error: 'Request Cuaca gagal',
    });
  }
};

export { getWeatherData };
