import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import Tag from '../../components/Tag/Tag';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import cStyles from '../../../styles/styles';

const Filters = ({ navigation }) => {
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 500;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);

  const screenWidth = Dimensions.get('window').width;
  let sliderWidth1 = screenWidth - 16;
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          flex: 1,
          marginBottom: 50,
        }}
      >
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
            Filters
          </Text>
          <View></View>
        </View>
        <Text
          style={[
            cStyles.SubHeads,
            {
              paddingVertical: 14,
              paddingHorizontal: 16,
              color: theme.WHITE_COLOR,
            },
          ]}
        >
          Price range
        </Text>
        <View style={{ paddingVertical: 15 }}>
          <RangeSlider
            sliderWidth={300}
            min={MIN_DEFAULT}
            max={MAX_DEFAULT}
            step={10}
            onValueChange={(range) => {
              setMinValue(range.min);
              setMaxValue(range.max);
            }}
          />
        </View>
        <Text
          style={[
            cStyles.SubHeads,
            {
              paddingVertical: 14,
              paddingHorizontal: 16,
              color: theme.WHITE_COLOR,
            },
          ]}
        >
          Colors
        </Text>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: 36,
              height: 36,
              borderRadius: 50,
            }}
          ></Pressable>
          <Pressable
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: 36,
              height: 36,
              borderRadius: 50,
            }}
          ></Pressable>
          <Pressable
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: 36,
              height: 36,
              borderRadius: 50,
            }}
          ></Pressable>
          <Pressable
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: 36,
              height: 36,
              borderRadius: 50,
            }}
          ></Pressable>
          <Pressable
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: 36,
              height: 36,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: theme.GRAY_COLOR,
            }}
          ></Pressable>
          <Pressable
            style={{
              backgroundColor: theme.PRIMARY_COLOR,
              width: 36,
              height: 36,
              borderRadius: 50,
            }}
          ></Pressable>
        </View>
        <Text
          style={[
            cStyles.SubHeads,
            {
              paddingVertical: 14,
              paddingHorizontal: 16,
              color: theme.WHITE_COLOR,
            },
          ]}
        >
          Sizes
        </Text>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Tag text='S' type='ordinary' active={true} FSTagBtn={styles.size} />
          <Tag text='M' type='ordinary' active={true} FSTagBtn={styles.size} />
          <Tag text='L' type='ordinary' FSTagBtn={styles.size} />
          <Tag text='XL' type='ordinary' active={true} FSTagBtn={styles.size} />
        </View>
        <Text
          style={[
            cStyles.SubHeads,
            {
              paddingVertical: 14,
              paddingHorizontal: 16,
              color: theme.WHITE_COLOR,
            },
          ]}
        >
          Category
        </Text>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <View style={{ width: '30%' }}>
            <Tag
              text='All'
              type='ordinary'
              active={true}
              FSTagBtn={styles.category}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Tag
              text='Women'
              type='ordinary'
              active={true}
              FSTagBtn={styles.category}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Tag
              text='Men'
              type='ordinary'
              active={true}
              FSTagBtn={styles.category}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Tag text='Boys' type='ordinary' FSTagBtn={styles.category} />
          </View>
          <View style={{ width: '30%' }}>
            <Tag
              text='Girls'
              type='ordinary'
              active={true}
              FSTagBtn={styles.category}
            />
          </View>
          <View style={{ width: '30%' }}></View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={[
                cStyles.SubHeads,
                {
                  color: theme.WHITE_COLOR,
                },
              ]}
            >
              Brand
            </Text>
            <Text
              style={[
                cStyles.HelperText,
                {
                  color: theme.WHITE_COLOR,
                  marginTop: 5,
                },
              ]}
            >
              adidas, puma, fila
            </Text>
          </View>
          <CustomBtn
            type='iconOnly'
            iconName='chevron-forward'
            iconSize={20}
            iconColor={theme.WHITE_COLOR}
            click={() => navigation.navigate('Brands')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <View style={{ width: '45%' }}>
            <CustomBtn text='Discard' styling='outline' size='small' />
          </View>
          <View style={{ width: '45%' }}>
            <CustomBtn text='Apply' size='small' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: theme.WHITE_COLOR,
  },
  checkbox: {
    margin: 8,
  },
  size: {
    marginRight: 20,
  },
  category: {
    marginBottom: 20,
  },
});

export default Filters;
