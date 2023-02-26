import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from '../styles/theme.style';
import Home from '../src/screens/Home/Home';
import Shop from '../src/screens/Shop/Shop';
import Category2 from '../src/components/Category2/Category2';
import Temp3 from '../src/components/Temp/Temp3';
import { Temp2 } from '../src/components/Temp/Temp2';
import Brand from '../src/components/Temp/Brand';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../src/screens/Categories/Categories';
import Categories2 from '../src/screens/Categories2/Categories2';
import Catalog from '../src/screens/Catalog/Catalog';
import Catalog2 from '../src/screens/Catalog2/Catalog2';
import Filters from '../src/screens/Filters/Filters';
import Brands from '../src/screens/Brands/Brands';
import ProductDetail from '../src/screens/ProductDetail/ProductDetail';
import Reviews from '../src/screens/Reviews/Reviews';
import Favorites from '../src/screens/Favorites/Favorites';
import Orders from '../src/screens/Orders/Orders';
import OrderDetail from '../src/screens/OrderDetail/OrderDetail';
import Profile from '../src/screens/Profile/Profile';
import Bag from '../src/screens/Bag/Bag';
import Settings from '../src/screens/Settings/Settings';
import AddAddress from '../src/screens/AddAddress/AddAddress';
import ShippingAddress from '../src/screens/ShippingAddress/ShippingAddress';
import PaymentCards from '../src/screens/PaymentCards/PaymentCards';
import Checkout from '../src/screens/Checkout/Checkout';

const Tab = createBottomTabNavigator();

const ShopStack = createNativeStackNavigator();

const ProfileStack = createNativeStackNavigator();

const BagStack = createNativeStackNavigator();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ShopStack.Screen name='Categories' component={Categories} />
      <ShopStack.Screen name='Categories2' component={Categories2} />
      <ShopStack.Screen name='Catalog' component={Catalog} />
      <ShopStack.Screen name='Catalog2' component={Catalog2} />
      <ShopStack.Screen name='Filters' component={Filters} />
      <ShopStack.Screen name='Brands' component={Brands} />
      <ShopStack.Screen name='Product' component={ProductDetail} />
      <ShopStack.Screen name='Reviews' component={Reviews} />
    </ShopStack.Navigator>
  );
}

function BagStackScreen() {
  return (
    <BagStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BagStack.Screen name='MyBag' component={Bag} />
      <BagStack.Screen name='Checkout' component={Checkout} />
      <BagStack.Screen name='PaymentCards' component={PaymentCards} />
      <BagStack.Screen name='ShippingAddress' component={ShippingAddress} />
      <BagStack.Screen name='AddAddress' component={AddAddress} />
    </BagStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name='MyProfile' component={Profile} />
      <ProfileStack.Screen name='Orders' component={Orders} />
      <ProfileStack.Screen name='OrderDetails' component={OrderDetail} />
      <ProfileStack.Screen name='Settings' component={Settings} />
    </ProfileStack.Navigator>
  );
}

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.PRIMARY_COLOR,
          tabBarInactiveTintColor: theme.GRAY_COLOR,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: theme.BACKGROUND_COLOR,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 65,
          },
          tabBarItemStyle: {
            paddingVertical: 10,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Shop' component={ShopStackScreen} />
        <Tab.Screen name='Bag' component={BagStackScreen} />
        <Tab.Screen name='Favorites' component={Favorites} />
        <Tab.Screen name='Profile' component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
