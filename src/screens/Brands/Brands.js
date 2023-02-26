import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import Checkbox from 'expo-checkbox';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Icon from '../../components/Icon/Icon';
import cStyles from '../../../styles/styles';

const Brands = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [text, onChangeText] = React.useState('');

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
            Brands
          </Text>
          <View></View>
        </View>
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
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <View style={styles.checkboxView} key={e}>
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
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // position: 'absolute',
            // bottom: 0,
            // left: 0,
            // right: 0,
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

export default Brands;
