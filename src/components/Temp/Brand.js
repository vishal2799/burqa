import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import Checkbox from 'expo-checkbox';
import CustomBtn from '../CustomBtn/CustomBtn';
import Icon from '../Icon/Icon';

const Brand = () => {
  const [isChecked, setChecked] = useState(false);
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={{ backgroundColor: theme.BACKGROUND_COLOR, flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          flex: 1,
          marginBottom: 50,
        }}
      >
        <View>
          <View style={styles.inputView}>
            <Icon name='search' size={15} color={theme.GRAY_COLOR} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder='Search'
              placeholderTextColor={theme.GRAY_COLOR}
            />
          </View>
        </View>
        <View>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
            <View style={styles.checkboxView}>
              <Text style={styles.checkboxText}>Custom colored checkbox</Text>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
            </View>
          ))}
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
          }}
        >
          <View style={{ width: '45%' }}>
            <CustomBtn text='Discard' styling='outline' size='small' />
          </View>
          <View style={{ width: '45%' }}>
            <CustomBtn text='Apply' size='small' />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  checkboxText: {
    fontSize: 15,
    color: theme.WHITE_COLOR,
  },
  inputView: {
    height: 40,
    margin: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: theme.DARK_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 5,
    color: theme.WHITE_COLOR,
  },
});

export default Brand;
