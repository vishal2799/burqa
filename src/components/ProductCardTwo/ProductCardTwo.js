import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import newProductImg from '../../../assets/newProductCard.png';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import CustomBtn from '../CustomBtn/CustomBtn';
import Label from '../Label/Label';
import Rating from '../Rating/Rating';
import ImagePC from '../../../assets/CatalogPC.png';
import { useNavigation } from '@react-navigation/native';
const ProductCardTwo = ({ where, addToFav }) => {
  const navigation = useNavigation();

  switch (where) {
    case 'bag':
      return (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <ImageBackground
            source={ImagePC}
            resizeMode='cover'
            style={{ width: '30%' }}
            imageStyle={{
              width: '100%',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Label type='new' FSLabel={styles.favLabel} />
          </ImageBackground>
          <View
            style={{
              padding: 10,
              position: 'relative',
              backgroundColor: theme.DARK_COLOR,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              width: '70%',
            }}
          >
            <Text
              style={[
                cStyles.SubHeads,
                { color: theme.WHITE_COLOR, marginBottom: 5 },
              ]}
            >
              Pullover
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
                Color:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  Gray
                </Text>
              </Text>
              <Text
                style={[
                  cStyles.HelperText,
                  { color: theme.GRAY_COLOR, marginLeft: 10 },
                ]}
              >
                Size:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  L
                </Text>
              </Text>
            </View>
            <View style={styles.plRP2}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomBtn
                  type='iconOnly'
                  iconName='remove'
                  iconSize={15}
                  iconColor={theme.WHITE_COLOR}
                  FSBtn={styles.PCBagAdd}
                />
                <Text
                  style={[
                    cStyles.DescItems,
                    {
                      color: theme.WHITE_COLOR,
                      marginLeft: 10,
                      marginRight: 10,
                    },
                  ]}
                >
                  1
                </Text>
                <CustomBtn
                  type='iconOnly'
                  iconName='add'
                  iconSize={15}
                  iconColor={theme.WHITE_COLOR}
                  FSBtn={styles.PCBagAdd}
                />
              </View>

              <Text
                style={[
                  cStyles.DescItems,
                  {
                    color: theme.WHITE_COLOR,
                    marginTop: 10,
                  },
                ]}
              >
                51$
              </Text>
            </View>
            <CustomBtn
              type='iconOnly'
              iconName='ellipsis-vertical'
              iconSize={15}
              iconColor={theme.WHITE_COLOR}
              FSBtn={styles.PCBagIcon}
            />
          </View>
        </View>
      );
    case 'order':
      return (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <ImageBackground
            source={ImagePC}
            resizeMode='cover'
            style={{ width: '30%' }}
            imageStyle={{
              width: '100%',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Label type='new' FSLabel={styles.favLabel} />
          </ImageBackground>
          <View
            style={{
              padding: 10,
              position: 'relative',
              backgroundColor: theme.DARK_COLOR,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              width: '70%',
            }}
          >
            <Text
              style={[
                cStyles.SubHeads,
                { color: theme.WHITE_COLOR, marginBottom: 5 },
              ]}
            >
              Pullover
            </Text>
            <Text
              style={[
                cStyles.HelperText,
                { color: theme.GRAY_COLOR, marginBottom: 10 },
              ]}
            >
              Mango
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 0 }}>
              <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
                Color:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  Gray
                </Text>
              </Text>
              <Text
                style={[
                  cStyles.HelperText,
                  { color: theme.GRAY_COLOR, marginLeft: 10 },
                ]}
              >
                Size:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  L
                </Text>
              </Text>
            </View>
            <View style={styles.plRP2}>
              <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
                Units:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  1
                </Text>
              </Text>

              <Text
                style={[
                  cStyles.DescItems,
                  {
                    color: theme.WHITE_COLOR,
                    marginTop: 10,
                  },
                ]}
              >
                51$
              </Text>
            </View>
          </View>
        </View>
      );
    case 'favorite':
      return (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <ImageBackground
            source={ImagePC}
            resizeMode='cover'
            style={{ width: '30%' }}
            imageStyle={{
              width: '100%',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Label type='new' FSLabel={styles.favLabel} />
          </ImageBackground>
          <View
            style={{
              padding: 10,
              position: 'relative',
              backgroundColor: theme.DARK_COLOR,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              width: '70%',
            }}
          >
            <Text
              style={[
                cStyles.HelperText,
                { color: theme.GRAY_COLOR, marginBottom: 5 },
              ]}
            >
              Mango
            </Text>
            <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
              Pullover
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
                Color:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  Gray
                </Text>
              </Text>
              <Text
                style={[
                  cStyles.HelperText,
                  { color: theme.GRAY_COLOR, marginLeft: 10 },
                ]}
              >
                Size:{' '}
                <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
                  L
                </Text>
              </Text>
            </View>

            <View style={styles.plRP}>
              <Rating />
              <Text
                style={[
                  cStyles.DescItems,
                  {
                    color: theme.WHITE_COLOR,
                    marginTop: 10,
                  },
                ]}
              >
                51$
              </Text>
            </View>
            <CustomBtn
              type='icon'
              iconName='basket'
              iconSize={15}
              iconColor={theme.WHITE_COLOR}
              FSBtn={styles.catalogHeart2}
              click={() => addToFav('favSheet')}
            />
            <CustomBtn
              type='iconOnly'
              iconName='close'
              iconSize={15}
              iconColor={theme.WHITE_COLOR}
              FSBtn={styles.PCBagIcon}
            />
          </View>
        </View>
      );

    default:
      break;
  }
  return (
    <Pressable onPress={() => navigation.navigate('Product')}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <ImageBackground
          source={ImagePC}
          resizeMode='cover'
          style={{ width: '30%' }}
          imageStyle={{
            width: '100%',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Label type='new' FSLabel={styles.favLabel} />
        </ImageBackground>
        <View
          style={{
            padding: 10,
            position: 'relative',
            backgroundColor: theme.DARK_COLOR,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            width: '70%',
          }}
        >
          <Text
            style={[
              cStyles.SubHeads,
              { color: theme.WHITE_COLOR, marginBottom: 5 },
            ]}
          >
            Pullover
          </Text>
          <Text style={[cStyles.HelperText, { color: theme.GRAY_COLOR }]}>
            Mango
          </Text>
          <Rating />
          <Text
            style={[
              cStyles.DescItems,
              {
                color: theme.WHITE_COLOR,
                marginTop: 10,
              },
            ]}
          >
            51$
          </Text>
          <CustomBtn
            type='icon'
            iconName='heart-outline'
            iconSize={15}
            iconColor={theme.GRAY_COLOR}
            FSBtn={styles.catalogHeart}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  catalogHeart: {
    position: 'absolute',
    bottom: -19,
    right: 0,
  },
  catalogHeart2: {
    position: 'absolute',
    bottom: -19,
    right: 0,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  favIcon: {
    position: 'absolute',
    bottom: -19,
    right: 0,
  },
  favLabel: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  plRP: {
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '80%',
  },
  plRP2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  PCBagIcon: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  PCBagAdd: {
    backgroundColor: theme.BACKGROUND_COLOR,
    padding: 5,
    borderRadius: 50,
  },
});

export default ProductCardTwo;
