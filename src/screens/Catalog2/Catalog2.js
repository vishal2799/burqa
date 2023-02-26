import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from '../../components/Category/Category';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Category2 from '../../components/Category2/Category2';

const Catalog2 = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}></SafeAreaView>
  );
};

export default Catalog2;
