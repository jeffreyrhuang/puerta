import React from 'react';
import { View, Text } from 'react-native';

const Prompt = (props) => {
  const { textStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        {props.promptText}
      </Text>
    </View>
  )
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  containerStyle: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { Prompt };