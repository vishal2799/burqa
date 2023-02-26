import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from '../../components/Icon/Icon';
import { products } from '../../../mockData';

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
      Checkout
    </Text>
    <View></View>
  </View>
);

const ShippingCard = ({ navigation }) => {
  return (
    <View
      style={{
        paddingVertical: 22,
        paddingHorizontal: 22,
        backgroundColor: theme.DARK_COLOR,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text
          style={[
            cStyles.DescItems,
            { color: theme.WHITE_COLOR, fontFamily: theme.FONT_FAMILY2 },
          ]}
        >
          Jon Doe
        </Text>
        <CustomBtn
          type='textOnly'
          text='Change'
          FSText={styles.edit}
          click={() => navigation.navigate('ShippingAddress')}
        />
      </View>
      <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
        dvll zkldvhld lkhzdhlksdlh aldvlhzd ldlhz zdlhkvhlks zdlhkf zdhvhlzd
        zdlkh
      </Text>
    </View>
  );
};

const PaymentCard = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={[
            cStyles.SubHeads,
            {
              color: theme.WHITE_COLOR,
            },
          ]}
        >
          Payment
        </Text>
        <CustomBtn
          type='textOnly'
          text='Change'
          FSText={styles.edit}
          click={() => navigation.navigate('PaymentCards')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
        }}
      >
        <FontAwesome5
          name='cc-mastercard'
          size={40}
          color={theme.WHITE_COLOR}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 30,
            alignItems: 'flex-start',
          }}
        >
          {[1, 2, 3].map((e, index) => (
            <View
              style={{ flexDirection: 'row', marginRight: 10 }}
              key={index + '*'}
            >
              {[1, 2, 3, 4].map((e, index) => (
                <Icon
                  name='star'
                  size={10}
                  color={theme.WHITE_COLOR}
                  key={index + 'icon'}
                />
              ))}
            </View>
          ))}
          <Text style={[cStyles.Text1, { color: theme.WHITE_COLOR }]}>
            3947
          </Text>
        </View>
      </View>
    </View>
  );
};

const DeliveryCard = () => {
  return (
    <View style={styles.delivery}>
      <FontAwesome5 name='dhl' size={40} color='black' />
      <Text
        style={[
          cStyles.HelperText,
          { color: theme.GRAY_COLOR, textAlign: 'center' },
        ]}
      >
        2-3 days
      </Text>
    </View>
  );
};

const Checkout = ({ navigation }) => {
  const renderItem = ({ item }) => <DeliveryCard />;
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          marginBottom: 60,
        }}
      >
        <Header navigation={navigation} />
        <Text
          style={[
            cStyles.SubHeads,
            {
              color: theme.WHITE_COLOR,
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginBottom: 10,
            },
          ]}
        >
          Your Shipping Address
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          <ShippingCard navigation={navigation} />
        </View>

        <View style={{ paddingLeft: 16, paddingRight: 40, marginTop: 40 }}>
          <PaymentCard navigation={navigation} />
        </View>
        <View
          style={{
            paddingLeft: 15,
            marginBottom: 10,
            marginTop: 40,
          }}
        >
          <Text
            style={[
              cStyles.SubHeads,
              {
                color: theme.WHITE_COLOR,
                marginBottom: 15,
              },
            ]}
          >
            Delivery Method
          </Text>
          <View>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              ItemSeparatorComponent={() => (
                <View style={{ marginRight: 12 }}></View>
              )}
            />
          </View>
        </View>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 19,
            marginTop: 40,
            marginBottom: 23,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
              Total Amount:
            </Text>
            <Text
              style={[
                cStyles.DescItems,
                { color: theme.WHITE_COLOR, fontFamily: theme.FONT_FAMILY2 },
              ]}
            >
              112$
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
              Total Amount:
            </Text>
            <Text
              style={[
                cStyles.DescItems,
                { color: theme.WHITE_COLOR, fontFamily: theme.FONT_FAMILY2 },
              ]}
            >
              112$
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
              Total Amount:
            </Text>
            <Text
              style={[
                cStyles.DescItems,
                { color: theme.WHITE_COLOR, fontFamily: theme.FONT_FAMILY2 },
              ]}
            >
              112$
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 30, paddingHorizontal: 16 }}>
          <CustomBtn text='Submit Order' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  edit: {
    color: theme.PRIMARY_COLOR,
  },
  delivery: {
    backgroundColor: theme.WHITE_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});

export default Checkout;
