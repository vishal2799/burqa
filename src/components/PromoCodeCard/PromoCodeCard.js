import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import catCard from '../../../assets/catcard.png';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import CustomBtn from '../CustomBtn/CustomBtn';

const PromoCodeCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.DARK_COLOR,
        marginBottom: 16,
        borderRadius: 10,
      }}
    >
      <ImageBackground
        source={catCard}
        imageStyle={{
          width: '100%',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        style={{
          width: '30%',
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={[cStyles.Headline, { color: theme.WHITE_COLOR }]}>
            10
          </Text>
          <View>
            <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
              %
            </Text>
            <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
              off
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          width: '70%',
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={[
              cStyles.DescItems,
              { color: theme.WHITE_COLOR, marginBottom: 10 },
            ]}
          >
            Summer Sale
          </Text>
          <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>
            summer2020
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Text
            style={[
              cStyles.HelperText,
              {
                color: theme.GRAY_COLOR,
                textAlign: 'center',
                marginBottom: 10,
              },
            ]}
          >
            23 days remaining
          </Text>
          <CustomBtn text='Apply' size='small' />
        </View>
      </View>
    </View>
  );
};

export default PromoCodeCard;
