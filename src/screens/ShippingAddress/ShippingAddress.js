import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Checkbox from 'expo-checkbox';

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
      Shipping Addresses
    </Text>
    <View></View>
  </View>
);

const ShippingCard = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View
      style={{
        paddingVertical: 18,
        paddingHorizontal: 22,
        backgroundColor: theme.DARK_COLOR,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text
          style={[
            cStyles.DescItems,
            { color: theme.WHITE_COLOR, fontFamily: theme.FONT_FAMILY2 },
          ]}
        >
          Jon Doe
        </Text>
        <CustomBtn type='textOnly' text='Edit' FSText={styles.edit} />
      </View>
      <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
        dvll zkldvhld lkhzdhlksdlh aldvlhzd ldlhz zdlhkvhlks zdlhkf zdhvhlzd
        zdlkh
      </Text>
      <View style={styles.checkboxView}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.checkboxText}>Custom colored checkbox</Text>
      </View>
    </View>
  );
};

const ShippingAddress = ({ navigation }) => {
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
        <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
          {[1, 2, 3].map((e, i) => (
            <View style={{ marginBottom: 20 }} key={i + 'sa'}>
              <ShippingCard />
            </View>
          ))}
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
            click={() => navigation.navigate('AddAddress')}
          />
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
  plus: {
    backgroundColor: theme.WHITE_COLOR,
    position: 'absolute',
    right: 15,
    bottom: 0,
    padding: 5,
    borderRadius: 50,
  },
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
  edit: {
    color: theme.PRIMARY_COLOR,
  },
});

export default ShippingAddress;
