import { Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const findCoordinates = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const { coords } = position;
        resolve(coords);
      },
      error => reject(error),
      Platform.OS === 'android'
        ? {}
        : { enableHighAccuracy: false, timeout: 5000, maximumAge: 1000 },
    );
  });

export { findCoordinates };
