import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import React, { useRef, useCallback, useMemo, useState } from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import { products } from '../../../mockData';
import ProductCardTwo from '../../components/ProductCardTwo/ProductCardTwo';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import PromoCodeCard from '../../components/PromoCodeCard/PromoCodeCard';

const Header = () => (
  <View
    style={{
      paddingTop: 15,
      paddingBottom: 12,
      paddingHorizontal: 12,
      backgroundColor: theme.BACKGROUND_COLOR,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}
  >
    <CustomBtn
      type='iconOnly'
      iconName='search'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
    />
  </View>
);

const PromoWrapper = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View>
      <View style={styles.inputW}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Enter your promo code'
          placeholderTextColor={theme.WHITE_COLOR}
        />
        <CustomBtn
          type='icon'
          iconName='md-arrow-forward-sharp'
          iconSize={16}
          iconColor={theme.DARK_COLOR}
          FSBtn={styles.arrow}
        />
      </View>
      <Text
        style={[
          cStyles.Headline3,
          {
            color: theme.WHITE_COLOR,
            paddingVertical: 18,
            paddingHorizontal: 16,
            fontFamily: theme.FONT_FAMILY2,
          },
        ]}
      >
        Your Promo Codes
      </Text>
      <View style={{ paddingHorizontal: 16 }}>
        {[1, 2, 3].map((e, i) => (
          <PromoCodeCard key={i + 'pcc'} />
        ))}
      </View>
    </View>
  );
};

const Bag = ({ navigation }) => {
  const [applied, setApplied] = useState(true);
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['30%', '70%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          marginBottom: 60,
        }}
      >
        <Header />
        <Text
          style={[
            cStyles.Headline,
            {
              color: theme.WHITE_COLOR,
              paddingHorizontal: 16,
              paddingVertical: 10,
            },
          ]}
        >
          My Bag
        </Text>
        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
          {products.map((e, index) => (
            <View style={{ marginBottom: 20 }} key={index}>
              <ProductCardTwo
                data={e}
                width={150}
                label={true}
                labelName='discount'
                labelText='-20%'
                where='bag'
              />
            </View>
          ))}
        </View>

        <View style={{ paddingHorizontal: 15, marginBottom: 5 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: theme.DARK_COLOR,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
              {applied ? 'FAVE50' : 'Promo Code'}
            </Text>
            {applied ? (
              <CustomBtn
                type='iconOnly'
                iconName='close'
                iconSize={20}
                iconColor={theme.WHITE_COLOR}
                click={() => setApplied(false)}
              />
            ) : (
              <CustomBtn
                type='iconOnly'
                iconName='chevron-forward'
                iconSize={20}
                iconColor={theme.WHITE_COLOR}
                click={() => handlePresentModalPress()}
              />
            )}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 20,
            marginBottom: 5,
          }}
        >
          <Text style={[cStyles.DescItems, { color: theme.GRAY_COLOR }]}>
            Total amount:{' '}
          </Text>
          <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
            124$
          </Text>
        </View>

        <View style={{ paddingHorizontal: 15, paddingBottom: 20 }}>
          <CustomBtn
            text='Checkout'
            click={() => navigation.navigate('Checkout')}
          />
        </View>
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ backgroundColor: theme.GRAY_COLOR }}
        backgroundStyle={{ backgroundColor: theme.BACKGROUND_COLOR }}
      >
        <View style={{ flex: 1 }}>
          <PromoWrapper />
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    // color: theme.WHITE_COLOR,
    // backgroundColor: theme.DARK_COLOR,
    // color: theme.GRAY_COLOR,
    // borderRadius: 10,
    // padding: 10,
    // marginTop: 15,
  },
  inputW: {
    color: theme.WHITE_COLOR,
    backgroundColor: theme.DARK_COLOR,
    color: theme.GRAY_COLOR,
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  arrow: {
    backgroundColor: theme.GRAY_COLOR,
    padding: 10,
  },
});

export default Bag;
