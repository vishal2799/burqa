import {
  View,
  Text,
  TextInput,
  ScrollView,
  Switch,
  StyleSheet,
} from 'react-native';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
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
    <CustomBtn
      type='iconOnly'
      iconName='search'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
    />
  </View>
);

const PasswordSheet = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Text
        style={[
          cStyles.DescItems,
          {
            color: theme.WHITE_COLOR,
            fontFamily: theme.FONT_FAMILY2,
            textAlign: 'center',
            marginBottom: 10,
          },
        ]}
      >
        Password Change
      </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Full name'
          placeholderTextColor={theme.WHITE_COLOR}
        />
        <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
          <CustomBtn type='textOnly' text='Forgot Password?' />
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Full name'
        placeholderTextColor={theme.WHITE_COLOR}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Full name'
        placeholderTextColor={theme.WHITE_COLOR}
      />
      <View style={{ marginVertical: 20 }}>
        <CustomBtn text='Change Password' />
      </View>
    </View>
  );
};

const Settings = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['30%', '55%'], []);

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
        <Header navigation={navigation} />
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
          Settings
        </Text>
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
            Personal information
          </Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Full name'
              placeholderTextColor={theme.WHITE_COLOR}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Date of Birth'
              placeholderTextColor={theme.WHITE_COLOR}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
              Password
            </Text>
            <CustomBtn
              type='textOnly'
              text='Change'
              click={() => handlePresentModalPress()}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Password'
              placeholderTextColor={theme.WHITE_COLOR}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
            Notification
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
              Sales
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: theme.GRAY_COLOR }}
              thumbColor={isEnabled ? theme.SUCCESS_COLOR : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
              Sales
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: theme.GRAY_COLOR }}
              thumbColor={isEnabled ? theme.SUCCESS_COLOR : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
              Sales
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: theme.GRAY_COLOR }}
              thumbColor={isEnabled ? theme.SUCCESS_COLOR : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
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
          <PasswordSheet />
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: theme.WHITE_COLOR,
    backgroundColor: theme.DARK_COLOR,
    color: theme.GRAY_COLOR,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
});

export default Settings;
