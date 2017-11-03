import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View
} from 'react-native';
import { Flake } from './Flake';

const { width, height } = Dimensions.get('window');

export class Tree extends Component {

  static defaultProps = {
    flakesCount: 50, 
  }

  render({ flakesCount } = this.props) {
    return <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/tree.jpg')}
      >
        {[...Array(flakesCount)].map((_, index) => <Flake
            x={Math.random() * width}               
            y={Math.random() * height}              
            radius={Math.random() * 4 + 1}          
            density={Math.random() * flakesCount}   
            key={index}
          />)}
      </Image>
    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: width,
    position: 'relative',
  },
});