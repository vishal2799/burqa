import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import RangeSlider from '../RangeSlider/RangeSlider';

const Temp2 = () => {
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 500;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);

  const [isChecked, setChecked] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={{ backgroundColor: theme.BACKGROUND_COLOR, flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          flex: 1,
          marginBottom: 50,
        }}
      >
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.paragraph}>Custom colored checkbox</Text>
        </View>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
        </Picker>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
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
});

export { Temp2 };
