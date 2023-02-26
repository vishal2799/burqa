import { View, Text } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import CustomBtn from '../CustomBtn/CustomBtn';
import { useNavigation } from '@react-navigation/native';

const OrderCard = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: theme.DARK_COLOR,
        padding: 20,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}
      >
        <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
          Order No1947034
        </Text>
        <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
          05-12-2019
        </Text>
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
          Tracking number:{' '}
          <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
            IW3475453455
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
          Quantity:{' '}
          <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
            3
          </Text>
        </Text>
        <Text
          style={[
            cStyles.HelperText,
            { color: theme.GRAY_COLOR, marginLeft: 10 },
          ]}
        >
          Total Amount:{' '}
          <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
            112$
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CustomBtn
          text='Detail'
          size='small'
          styling='outline'
          click={() => navigation.navigate('OrderDetails')}
        />
        <Text style={[cStyles.DescItems, { color: theme.SUCCESS_COLOR }]}>
          Delivered
        </Text>
      </View>
    </View>
  );
};

export default OrderCard;
