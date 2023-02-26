import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import { products2 } from '../../../mockData';
import ProductCardTwo from '../../components/ProductCardTwo/ProductCardTwo';
import StarRating from '../../components/StarRating/StarRating';
import WriteReview from '../../components/WriteReview/WriteReview';

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
      Order Details
    </Text>
    <CustomBtn
      type='iconOnly'
      iconName='search'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
    />
  </View>
);

const OrderDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          flex: 1,
          marginBottom: 60,
        }}
      >
        <Header navigation={navigation} />
        <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
              Order No1947034
            </Text>
            <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
              05-12-2019
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
          >
            <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
              Tracking number:{' '}
              <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                IW3475453455
              </Text>
            </Text>
            <Text style={[cStyles.DescItems, { color: theme.SUCCESS_COLOR }]}>
              Delivered
            </Text>
          </View>
          <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
            3 items
          </Text>
        </View>
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
          {[1, 2, 3].map((e, i) => (
            <View style={{ marginBottom: 15 }} key={i}>
              <ProductCardTwo
                data={e}
                width={150}
                label={true}
                labelName='discount'
                labelText='-20%'
                where='order'
              />
            </View>
          ))}
        </View>
        <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          <Text
            style={[
              cStyles.DescItems,
              { color: theme.WHITE_COLOR, marginBottom: 15 },
            ]}
          >
            Order Information
          </Text>
          <View>
            {[1, 2, 3, 4].map((e, i) => (
              <View
                key={e + i}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
                  Tracking number:{' '}
                  <Text
                    style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}
                  >
                    IW3475453455
                  </Text>
                </Text>
              </View>
            ))}
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ width: '48%' }}>
              <CustomBtn text='Discard' styling='outline' size='small' />
            </View>
            <View style={{ width: '48%' }}>
              <CustomBtn text='Apply' size='small' />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;
