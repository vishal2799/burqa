import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from '../../components/Category/Category';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import OrderCard from '../../components/OrderCard/OrderCard';
import { products2 } from '../../../mockData';
import TabBar from '../../components/TabBar/TabBar';

const Tab = createMaterialTopTabNavigator();

const Header = ({ navigation }) => (
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
    <CustomBtn
      type='iconOnly'
      iconName='chevron-back'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
      click={() => navigation.goBack()}
    />
    <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
      My Orders
    </Text>
    <CustomBtn
      type='iconOnly'
      iconName='search'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
    />
  </View>
);

const Delivered = () => {
  const renderItem = ({ item }) => <OrderCard data={item} />;

  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 65,
        backgroundColor: theme.BACKGROUND_COLOR,
      }}
    >
      <FlatList
        data={products2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + '_'}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: 25 }}></View>
        )}
      />
    </View>
  );
};

const Orders = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <Header navigation={navigation} />
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name='Delivered' component={Delivered} />
        <Tab.Screen name='Processing' component={Delivered} />
        <Tab.Screen name='Cancelled' component={Delivered} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Orders;
