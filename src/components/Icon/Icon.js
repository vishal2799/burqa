import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Icon = ({ name, size, color, iconStyles }) => {
  return <Ionicons name={name} size={+size} color={color} style={iconStyles} />;
};

export default Icon;
