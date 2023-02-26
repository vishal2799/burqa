import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import PDImg from '../../../assets/ProductDetail.png';
import { products } from '../../../mockData';
import TagIcon from '../../components/TagIcon/TagIcon';
import Rating from '../../components/Rating/Rating';
import { CategoryCard3 } from '../../components/Category2/Category2';
import ProductCard from '../../components/ProductCard/ProductCard';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const ProductDetail = ({ navigation }) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState();

  const renderItem = ({ item }) => <Image source={PDImg} />;

  const renderItem1 = ({ item }) => (
    <ProductCard
      data={item}
      width={150}
      label={true}
      labelName='discount'
      labelText='-20%'
    />
  );
  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
        <View style={{ marginBottom: 80, position: 'relative' }}>
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
              Short Dress
            </Text>
            <CustomBtn
              type='iconOnly'
              iconName='share-social'
              iconSize={24}
              iconColor={theme.WHITE_COLOR}
            />
          </View>
          <View>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              ItemSeparatorComponent={() => (
                <View style={{ marginRight: 5 }}></View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              paddingVertical: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ width: '38%' }}>
              <TagIcon
                text='Size'
                active={true}
                type='ordinary'
                press={handlePresentModalPress}
              />
            </View>
            <View style={{ width: '38%' }}>
              <TagIcon text='Black' active={true} type='ordinary' />
            </View>
            <CustomBtn
              type='icon'
              iconName='heart'
              iconSize={16}
              iconColor={theme.WHITE_COLOR}
            />
          </View>
          <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={[cStyles.Headline2, { color: theme.WHITE_COLOR }]}>
                H&M
              </Text>
              <Text style={[cStyles.Headline2, { color: theme.WHITE_COLOR }]}>
                $19.99
              </Text>
            </View>
            <Text
              style={[
                cStyles.HelperText,
                { color: theme.GRAY_COLOR, marginTop: 5, marginBottom: 5 },
              ]}
            >
              Short Black Dress
            </Text>
            <Rating />
            <Text
              style={[
                cStyles.DescItems,
                { color: theme.ORDINARY_COLOR, marginTop: 5, marginBottom: 10 },
              ]}
            >
              cxlslgvlhkf sdhgdh sdhi sifhi aihpsfhp aafd jcvfxj jsf dvhlzkv
              dipvsdp djovpsv posdfpjsd sdjivp cjsvp
            </Text>
          </View>
          <View
            style={{
              //   position: 'absolute',
              //   bottom: Dimensions.get('window').height - 5,
              //   left: 0,
              //   right: 0,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <CustomBtn text='Add to Cart' />
          </View>
          <View>
            <CategoryCard3 />
            <CategoryCard3 />
            <CategoryCard3 />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
                marginTop: 20,
              }}
            >
              <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
                You can also like this
              </Text>
              <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>
                12 items
              </Text>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <FlatList
                data={products}
                renderItem={renderItem1}
                keyExtractor={(item) => item.id}
                horizontal={true}
                ItemSeparatorComponent={() => (
                  <View style={{ marginRight: 12 }}></View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View
        style={{
          position: 'absolute',
          bottom: 70,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
        }}
      >
        <CustomBtn text='Add to Cart' />
      </View> */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ backgroundColor: theme.GRAY_COLOR }}
        backgroundStyle={{ backgroundColor: theme.DARK_COLOR }}
      >
        <View style={{ flex: 1 }}>
          <Text style={[cStyles.Headline3]}>Sort by</Text>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProductDetail;
