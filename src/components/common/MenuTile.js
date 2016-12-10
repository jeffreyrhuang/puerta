import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const buttonWidth = (width / 2) - 30;
const buttonHeight = buttonWidth - 30;

const MenuTile = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <View style={styles.innerContent}>
        <Icon name={props.iconName} size={30} style={styles.icon} />
        <Text style={styles.text}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: buttonWidth,
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContent: {
    width: buttonWidth - 20,
    height: buttonHeight - 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffa64d',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  icon: {
    color: '#fff',
    paddingBottom: 7
  }
};

export { MenuTile };