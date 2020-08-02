import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';

import styles from './styles';

Icon.loadFont();
IconA.loadFont();

export default function Header({label, right, left, icon, onPress, color}) {
  return (
    <View style={styles.container}>
      {left ? (
        <TouchableOpacity {...{onPress}}>
          <IconA name={icon} color={color} size={20} />
        </TouchableOpacity>
      ) : (
        <View style={styles.viewTransparent} />
      )}

      <Text style={styles.title}>{label}</Text>
      {right ? (
        <TouchableOpacity {...{onPress}}>
          <Icon name={icon} size={20} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.viewTransparent} />
      )}
    </View>
  );
}
