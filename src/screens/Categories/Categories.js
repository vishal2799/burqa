import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from '../../components/Category/Category';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';

const Tab = createMaterialTopTabNavigator();

const Header = () => (
  <View
    style={{
      paddingTop: 15,
      paddingBottom: 12,
      paddingHorizontal: 12,
      backgroundColor: theme.BACKGROUND_COLOR,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <View></View>
    <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
      Categories
    </Text>
    <CustomBtn
      type='iconOnly'
      iconName='search'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
    />
  </View>
);

const Categories = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.WHITE_COLOR,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: theme.BACKGROUND_COLOR },
          tabBarInactiveTintColor: theme.GRAY_COLOR,
          tabBarIndicatorStyle: { backgroundColor: theme.PRIMARY_COLOR },
        }}
      >
        <Tab.Screen name='Women' component={Category} />
        <Tab.Screen name='Men' component={Category} />
        <Tab.Screen name='Kids' component={Category} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Categories;
