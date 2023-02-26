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

const ProductCard = ({
  data,
  where,
  discountPrice,
  label,
  labelName,
  labelText,
  width,
  addToFav,
}) => {
  const navigation = useNavigation();
  let favorite = where === 'favorite' ? true : false;

  return (
    <View style={{ width: width ? width : '100%' }}>
      <Pressable onPress={() => navigation.navigate('Product')}>
        <ImageBackground
          source={newProductImg}
          resizeMode='cover'
          imageStyle={{ borderRadius: 10 }}
          style={styles.image}
        >
          {favorite ? (
            <View style={label ? styles.favTop : styles.favTop2}>
              {label ? <Label type={labelName} text={labelText} /> : ''}
              <CustomBtn
                type='iconOnly'
                iconName='close'
                iconSize={20}
                iconColor={theme.GRAY_COLOR}
              />
            </View>
          ) : (
            label && (
              <View style={styles.onlyLabel}>
                <Label type={labelName} text={labelText} />
              </View>
            )
          )}

          <CustomBtn
            type='icon'
            iconName={favorite ? 'basket' : 'heart-outline'}
            iconSize='15'
            iconColor={theme.WHITE_COLOR}
            FSBtn={favorite ? styles.favIcon2 : styles.favIcon}
            click={favorite ? addToFav : ''}
          />
        </ImageBackground>
        <Rating />
        <View style={{ marginTop: 6 }}>
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.GRAY_COLOR, marginBottom: 5 },
            ]}
          >
            Mango Boy
          </Text>
          <Text
            style={[
              cStyles.SubHeads,
              { color: theme.WHITE_COLOR, marginTop: 3 },
            ]}
          >
            T-SHIRT Sailing
          </Text>
          {favorite && (
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
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
          )}
          {labelName !== 'discount' ? (
            <Text
              style={[
                cStyles.DescItems,
                { color: theme.WHITE_COLOR, marginTop: 3 },
              ]}
            >
              10$
            </Text>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 3,
              }}
            >
              <Text
                style={[
                  cStyles.DescItems,
                  {
                    color: theme.GRAY_COLOR,
                    textDecorationLine: 'line-through',
                  },
                ]}
              >
                15$
              </Text>
              <Text
                style={[
                  cStyles.DescItems,
                  {
                    color: theme.PRIMARY_COLOR,
                    marginLeft: 3,
                  },
                ]}
              >
                10$
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 184,
    width: '100%',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    fontFamily: theme.FONT_FAMILY2,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
    marginBottom: 15,
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 10,
    top: 8,
    left: 9,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  button: {
    position: 'absolute',
    bottom: -15,
    right: 0,
    backgroundColor: theme.DARK_COLOR,
    padding: 8,
    borderRadius: 50,
  },
  favLabel: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  favIcon: {
    position: 'absolute',
    bottom: -19,
    right: 0,
  },
  favIcon2: {
    position: 'absolute',
    bottom: -19,
    right: 0,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  favTop: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    right: 0,
    paddingHorizontal: 5,
  },
  favTop2: {
    position: 'absolute',
    top: 10,
    right: 0,
    paddingHorizontal: 5,
  },
  onlyLabel: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingHorizontal: 5,
  },
});

export default ProductCard;
