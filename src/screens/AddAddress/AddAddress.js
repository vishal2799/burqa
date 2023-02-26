import {
  View,
  Text,
  TextInput,
  ScrollView,
  Switch,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';

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
      Add Shipping Address
    </Text>
    <View></View>
  </View>
);

const AddAddress = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          marginBottom: 60,
        }}
      >
        <Header navigation={navigation} />

        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <View key={i + 'asa'}>
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
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginBottom: 20,
          }}
        >
          <CustomBtn text='Add' />
        </View>
      </ScrollView>
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

export default AddAddress;
