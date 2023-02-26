import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import Checkbox from 'expo-checkbox';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Icon from '../../components/Icon/Icon';
import Avatar from '../../../assets/Avatar.png';
import rImg from '../../../assets/reviewImg.png';
import { products } from '../../../mockData';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import WriteReview from '../../components/WriteReview/WriteReview';

const ReviewCard = () => {
  const renderItem = ({ item }) => (
    <Image source={rImg} style={{ borderRadius: 8 }} />
  );
  return (
    <View style={{ paddingHorizontal: 32 }}>
      <View
        style={{
          backgroundColor: theme.DARK_COLOR,
          padding: 24,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: theme.FONT_SIZE_LABEL,
            fontFamily: theme.FONT_FAMILY2,
            lineHeight: 20,
            color: theme.WHITE_COLOR,
            marginBottom: 5,
          }}
        >
          Helene Moore
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            {[1, 2, 3, 4, 5].map((el, i) => (
              <Icon name='star' size={14} color='#FFBA49' />
            ))}
          </View>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginTop: 5, marginBottom: 5 },
            ]}
          >
            June 5, 19
          </Text>
        </View>
        <Text
          style={[
            cStyles.DescItems,
            { color: theme.ORDINARY_COLOR, marginTop: 5, marginBottom: 10 },
          ]}
        >
          cxlslgvlhkf sdhgdh sdhi sifhi aihpsfhp aafd jcvfxj jsf dvhlzkv dipvsdp
          djovpsv posdfpjsd sdjivp cjsvp
        </Text>
        <Image
          source={Avatar}
          style={{
            position: 'absolute',
            top: -15,
            left: -15,
            borderRadius: 50,
            width: 32,
            height: 32,
          }}
        />
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            ItemSeparatorComponent={() => (
              <View style={{ marginRight: 10 }}></View>
            )}
          />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <CustomBtn
            type='iconWithText1'
            iconName='thumbs-up'
            text='Helpful'
            iconSize={20}
          />
        </View>
      </View>
    </View>
  );
};

const Header = ({ backPress }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{ marginBottom: 35 }}>
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
          click={backPress}
        />
        <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
          Rating & Reviews
        </Text>
        <CustomBtn
          type='iconOnly'
          iconName='share-social'
          iconSize={24}
          iconColor={theme.WHITE_COLOR}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingLeft: 15,
          paddingRight: 30,
          paddingTop: 10,
          paddingBottom: 30,
        }}
      >
        <View>
          <Text style={[cStyles.Headline, { color: theme.WHITE_COLOR }]}>
            4.3
          </Text>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginTop: 5, marginBottom: 5 },
            ]}
          >
            23 ratings
          </Text>
        </View>

        <View>
          {[[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3], [1, 2], [1]].map(
            (e, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  {e.map((el, i) => (
                    <Icon name='star' size={14} color='#FFBA49' />
                  ))}
                </View>
                <View
                  style={{
                    backgroundColor: theme.SALE_HOT_COLOR,
                    padding: 5,
                    width: e.length * 10,
                    height: 10,
                    borderRadius: 20,
                    marginLeft: 5,
                  }}
                ></View>
              </View>
            )
          )}
        </View>
        <View>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginBottom: 5 },
            ]}
          >
            5
          </Text>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginBottom: 5 },
            ]}
          >
            5
          </Text>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginBottom: 5 },
            ]}
          >
            5
          </Text>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginBottom: 5 },
            ]}
          >
            5
          </Text>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginBottom: 5 },
            ]}
          >
            5
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          paddingRight: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={[cStyles.Headline, { color: theme.WHITE_COLOR }]}>
          8 reviews
        </Text>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.paragraph}>With photo</Text>
        </View>
      </View>
    </View>
  );
};

const Reviews = ({ navigation }) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['30%', '90%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderItem1 = ({ item }) => <ReviewCard />;

  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          marginBottom: 60,
        }}
      >
        <View>
          <FlatList
            data={products}
            renderItem={renderItem1}
            keyExtractor={(item) => item.id + '_'}
            ItemSeparatorComponent={() => (
              <View style={{ marginTop: 30 }}></View>
            )}
            ListHeaderComponent={
              <Header backPress={() => navigation.goBack()} />
            }
          />
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              elevation: 2,
            }}
          >
            <CustomBtn
              text='Write a Review'
              type='iconWithText'
              iconName='pencil'
              iconSize={16}
              click={() => handlePresentModalPress()}
            />
          </View>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ backgroundColor: theme.GRAY_COLOR }}
        backgroundStyle={{ backgroundColor: theme.BACKGROUND_COLOR }}
      >
        <View style={{ flex: 1 }}>
          <WriteReview />
        </View>
      </BottomSheetModal>
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

export default Reviews;
