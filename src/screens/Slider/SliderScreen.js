import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export class SliderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
        'https://source.unsplash.com/1024x768/?car',
        'https://source.unsplash.com/1024x768/?food',
      ],
    };
  }

  render() {
    let {images} = this.state;

    return (
      <View style={styles.conatiner}>
        <Text style={styles.title}>Main Slider</Text>
        <SliderBox
          style={styles.slider}
          images={images}
          autoplay={true}
          circleLoop={true}
          dotColor="#007AFF"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 50,
  },
  slider: {
    height: 500,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
});
