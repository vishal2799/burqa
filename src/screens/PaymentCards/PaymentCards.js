import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import PCard1 from '../../../assets/PCard1.png';
import PCard2 from '../../../assets/PCard2.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from '../../components/Icon/Icon';
import { FontAwesome5 } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

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
      Payment Methods
    </Text>
    <View></View>
  </View>
);

const PaymentCard = () => {
  return (
    <ImageBackground
      source={PCard1}
      style={{ paddingHorizontal: 25, paddingVertical: 30, borderRadius: 10 }}
      imageStyle={{ borderRadius: 10 }}
    >
      <MaterialCommunityIcons
        name='integrated-circuit-chip'
        size={28}
        color='#FFBA49'
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginBottom: 40,
        }}
      >
        {[1, 2, 3].map((e, i) => (
          <View style={{ flexDirection: 'row' }} key={i + 'pc1w'}>
            {[1, 2, 3, 4].map((e, i) => (
              <Icon
                name='star'
                size={14}
                color={theme.WHITE_COLOR}
                key={i + 'pc1i'}
              />
            ))}
          </View>
        ))}
        <Text style={[cStyles.Headline2, { color: theme.WHITE_COLOR }]}>
          3947
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>
            Card Holder Name
          </Text>
          <Text
            style={[
              cStyles.DescItems,
              {
                color: theme.WHITE_COLOR,
                fontFamily: theme.FONT_FAMILY2,
                marginTop: 5,
              },
            ]}
          >
            Jennifer Lawrence
          </Text>
        </View>
        <View>
          <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>
            Expiry Date
          </Text>
          <Text
            style={[
              cStyles.DescItems,
              {
                color: theme.WHITE_COLOR,
                fontFamily: theme.FONT_FAMILY2,
                marginTop: 5,
              },
            ]}
          >
            05/23
          </Text>
        </View>
        <FontAwesome5
          name='cc-mastercard'
          size={24}
          color={theme.WHITE_COLOR}
        />
      </View>
    </ImageBackground>
  );
};

const PaymentCard2 = () => {
  return (
    <ImageBackground
      source={PCard2}
      style={{ paddingHorizontal: 25, paddingVertical: 30, borderRadius: 10 }}
      imageStyle={{ borderRadius: 10 }}
    >
      <View style={{ alignItems: 'flex-end' }}>
        <FontAwesome5 name='cc-visa' size={24} color={theme.WHITE_COLOR} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}
      >
        {[1, 2, 3].map((e, i) => (
          <View style={{ flexDirection: 'row' }} key={i + 'pc2w'}>
            {[1, 2, 3, 4].map((e, i) => (
              <Icon
                name='star'
                size={14}
                color={theme.WHITE_COLOR}
                key={i + 'pc2i'}
              />
            ))}
          </View>
        ))}
        <Text style={[cStyles.Headline2, { color: theme.WHITE_COLOR }]}>
          3947
        </Text>
      </View>
      <MaterialCommunityIcons
        name='integrated-circuit-chip'
        size={28}
        color='#FFBA49'
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View>
          <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>
            Card Holder Name
          </Text>
          <Text
            style={[
              cStyles.DescItems,
              {
                color: theme.WHITE_COLOR,
                fontFamily: theme.FONT_FAMILY2,
                marginTop: 5,
              },
            ]}
          >
            Jennifer Lawrence
          </Text>
        </View>
        <View>
          <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>
            Expiry Date
          </Text>
          <Text
            style={[
              cStyles.DescItems,
              {
                color: theme.WHITE_COLOR,
                fontFamily: theme.FONT_FAMILY2,
                marginTop: 5,
              },
            ]}
          >
            05/23
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const AddCard = () => {
  const [text, onChangeText] = React.useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <Text
        style={[
          cStyles.SubHeads,
          {
            color: theme.WHITE_COLOR,
            paddingHorizontal: 16,
            paddingTop: 16,
            textAlign: 'center',
          },
        ]}
      >
        Add new card
      </Text>
      <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
        {[1, 2, 3].map((e, i) => (
          <View key={i + 'ac'}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Full name'
              placeholderTextColor={theme.WHITE_COLOR}
            />
          </View>
        ))}
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <View style={styles.checkboxView}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.checkboxText}>Custom colored checkbox</Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginBottom: 20,
        }}
      >
        <CustomBtn text='Add' />
      </View>
    </View>
  );
};

const PaymentCards = ({ navigation }) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['30%', '65%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const [isChecked, setChecked] = useState(false);

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
              paddingVertical: 20,
              marginBottom: 10,
            },
          ]}
        >
          Your payment cards
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          <PaymentCard />
          <View style={styles.checkboxView}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.checkboxText}>Custom colored checkbox</Text>
          </View>
        </View>
        <View
          style={{ paddingHorizontal: 16, marginTop: 20, marginBottom: 10 }}
        >
          <PaymentCard2 />
          <View style={styles.checkboxView}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.checkboxText}>Custom colored checkbox</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            position: 'relative',
            marginBottom: 30,
          }}
        >
          <CustomBtn
            type='iconOnly'
            iconName='add'
            iconSize={20}
            FSBtn={styles.plus}
            iconColor={theme.DARK_COLOR}
            click={() => handlePresentModalPress()}
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
          <AddCard />
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
  checkboxText: {
    fontSize: 15,
    color: theme.WHITE_COLOR,
    marginLeft: 20,
  },
  plus: {
    backgroundColor: theme.WHITE_COLOR,
    position: 'absolute',
    right: 15,
    bottom: 0,
    padding: 5,
    borderRadius: 50,
  },
  input: {
    color: theme.WHITE_COLOR,
    backgroundColor: theme.DARK_COLOR,
    color: theme.GRAY_COLOR,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
});

export default PaymentCards;
