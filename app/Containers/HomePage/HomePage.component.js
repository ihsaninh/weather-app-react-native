import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomePage extends Component {
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    const { getWeatherData } = this.props;
    await getWeatherData();
  };
  render() {
    console.log(this.props.weatherData);
    return (
      <View>
        <Text> Hello World </Text>
      </View>
    );
  }
}

export { HomePage };
