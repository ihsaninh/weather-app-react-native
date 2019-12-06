import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class HomePage extends Component {
  async componentDidMount() {
    const { getWeatherData } = this.props;
    await getWeatherData();
  }

  render() {
    const { weatherData } = this.props;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Image
          style={{ width: 60, height: 60 }}
          source={{
            uri: `https://www.weatherbit.io/static/img/icons/${
              weatherData?.weather?.icon
            }.png`,
          }}
        />
        <Text>{weatherData?.city_name}</Text>
        <Text>{weatherData?.weather?.description}</Text>
      </View>
    );
  }
}

export { HomePage };
