import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import BigBanner from '../../../assets/BigBanner.png';
import MainImg from '../../../assets/main.png';
import MainImg2 from '../../../assets/main2.png';
import MainImg3 from '../../../assets/main3.png';

import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../../mockData';
import CustomBtn from '../../components/CustomBtn/CustomBtn';

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ProductCard
      data={item}
      width={150}
      label={true}
      labelName='discount'
      labelText='-20%'
    />
  );
  const renderItem1 = ({ item }) => (
    <ProductCard
      data={item}
      width={150}
      label={true}
      labelName='new'
      labelText='new'
    />
  );

  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
        <ImageBackground
          source={BigBanner}
          resizeMode='cover'
          style={styles.image}
        >
          <View style={{ alignItems: 'flex-start', width: '60%' }}>
            <Text style={styles.text}>Fashion sale</Text>
            <CustomBtn size='small' text='Check' />
          </View>
        </ImageBackground>
        <View style={{ paddingVertical: 30 }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginBottom: 15,
              }}
            >
              <View>
                <Text style={[cStyles.Headline, { color: theme.WHITE_COLOR }]}>
                  Sale
                </Text>
                <Text
                  style={[
                    cStyles.HelperText,
                    { color: theme.GRAY_COLOR, marginTop: 4 },
                  ]}
                >
                  Super Summer Sale
                </Text>
              </View>
              <CustomBtn type='textOnly' text='View All' />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                ItemSeparatorComponent={() => (
                  <View style={{ marginRight: 12 }}></View>
                )}
              />
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 30 }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginBottom: 15,
              }}
            >
              <View>
                <Text style={[cStyles.Headline, { color: theme.WHITE_COLOR }]}>
                  New
                </Text>
                <Text
                  style={[
                    cStyles.HelperText,
                    { color: theme.GRAY_COLOR, marginTop: 4 },
                  ]}
                >
                  You've never seen it before
                </Text>
              </View>
              <CustomBtn type='textOnly' text='View All' />
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
        <View style={{ marginTop: 30, marginBottom: 65 }}>
          <ImageBackground
            source={MainImg}
            resizeMode='cover'
            style={{ height: 380, position: 'relative' }}
          >
            <Text
              style={[
                cStyles.Headline,
                {
                  position: 'absolute',
                  bottom: 27,
                  right: 18,
                  color: theme.WHITE_COLOR,
                },
              ]}
            >
              New collection
            </Text>
          </ImageBackground>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <View
                style={{
                  height: 185,
                  position: 'relative',
                  backgroundColor: theme.BACKGROUND_COLOR,
                }}
              >
                <Text
                  style={[
                    cStyles.Headline,
                    {
                      paddingHorizontal: 18,
                      width: '70%',
                      paddingVertical: 30,
                      color: theme.PRIMARY_COLOR,
                    },
                  ]}
                >
                  Summer Sale
                </Text>
              </View>
              <ImageBackground
                source={MainImg3}
                resizeMode='cover'
                style={{ height: 185, position: 'relative' }}
              >
                <Text
                  style={[
                    cStyles.Headline,
                    {
                      position: 'absolute',
                      bottom: 27,
                      left: 18,
                      color: theme.WHITE_COLOR,
                    },
                  ]}
                >
                  Black
                </Text>
              </ImageBackground>
            </View>
            <View style={{ width: '50%', height: '100%' }}>
              <Pressable onPress={() => navigation.navigate('Shop')}>
                <ImageBackground
                  source={MainImg2}
                  resizeMode='cover'
                  style={{ height: 370, position: 'relative' }}
                >
                  <Text
                    style={[
                      cStyles.Headline,
                      {
                        position: 'absolute',
                        top: 27,
                        width: '50%',
                        left: 18,
                        color: theme.WHITE_COLOR,
                      },
                    ]}
                  >
                    Men's hats
                  </Text>
                </ImageBackground>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 600,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 32,
  },
  text: {
    color: 'white',
    fontFamily: theme.FONT_FAMILY2,
    fontSize: 56,
    lineHeight: 56,
    color: theme.WHITE_COLOR,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 3,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 25,
  },
  btnText: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.ORDINARY_COLOR,
  },
});

export default Home;
