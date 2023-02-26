import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Avatar from '../../../assets/Avatar.png';

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

const Profile = ({ navigation }) => {
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
          My Profile
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 15,
          }}
        >
          <Image
            source={Avatar}
            style={{ width: 64, height: 64, borderRadius: 50, marginRight: 18 }}
          />
          <View>
            <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
              Matinda Brown
            </Text>
            <Text style={[cStyles.DescItems, { color: theme.GRAY_COLOR }]}>
              matindabrown@gmail.com
            </Text>
          </View>
        </View>
        <View>
          {[1, 2, 3, 4, 5, 6].map((e, index) => (
            <View
              key={e}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 18,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.GRAY_COLOR,
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={[
                    cStyles.DescItems,
                    { color: theme.WHITE_COLOR, marginBottom: 9 },
                  ]}
                >
                  My orders
                </Text>
                <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
                  Already have 12 orders
                </Text>
              </View>
              <CustomBtn
                type='iconOnly'
                iconName='chevron-forward'
                iconSize={16}
                iconColor={theme.WHITE_COLOR}
                click={() =>
                  index === 1
                    ? navigation.navigate('Orders')
                    : navigation.navigate('Settings')
                }
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
