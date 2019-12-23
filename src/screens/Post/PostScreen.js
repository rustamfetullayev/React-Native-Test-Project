import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {Loader} from '../../components';

export class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        'https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      ],
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  render() {
    let {images, isLoading} = this.state;

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </>
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
