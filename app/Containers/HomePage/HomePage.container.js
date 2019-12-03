import { connect } from 'react-redux';

import { HomePage } from './HomePage.component';
import { getWeatherData } from '../../Redux/Actions/WeatherData/WeatherData';

const mapStateToProps = state => ({
  weatherData: state.weatherData.data,
  isLoading: state.weatherData.loading,
  refreshing: state.weatherData.refreshing,
});

const mapDispatchToProps = dispatch => ({
  getWeatherData: () => dispatch(getWeatherData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
