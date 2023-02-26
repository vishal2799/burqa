import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { products3 } from '../../../mockData';
import CustomBtn from '../CustomBtn/CustomBtn';
import { useNavigation } from '@react-navigation/native';
import Icon from '../Icon/Icon';

const CategoryCard2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Catalog')}>
      <Text
        style={[
          cStyles.Text1,
          {
            color: theme.WHITE_COLOR,
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderBottomColor: theme.GRAY_COLOR,
            borderBottomWidth: 0.5,
          },
        ]}
      >
        Jeans
      </Text>
    </Pressable>
  );
};

const CategoryCard3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomColor: theme.GRAY_COLOR,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onPress={() => navigation.navigate('Reviews')}
    >
      <Text
        style={[
          cStyles.Text1,
          {
            color: theme.WHITE_COLOR,
          },
        ]}
      >
        Jeans
      </Text>
      <Icon name='chevron-forward' size={16} color={theme.WHITE_COLOR} />
    </Pressable>
  );
};

const Header = () => {
  const navigation = useNavigation();

  return (
    <>
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
          Categories
        </Text>
        <CustomBtn
          type='iconOnly'
          iconName='search'
          iconSize={24}
          iconColor={theme.WHITE_COLOR}
        />
      </View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <CustomBtn text='View All Items' size='big' />
      </View>
      <Text
        style={[
          styles.btnText,
          {
            textAlign: 'left',
            paddingHorizontal: 16,
            marginBottom: 16,
            color: theme.GRAY_COLOR,
          },
        ]}
      >
        Choose Category
      </Text>
    </>
  );
};

const Category2 = () => {
  const renderItem = ({ item }) => <CategoryCard2 data={item} />;

  return (
    <View
      style={{ backgroundColor: theme.BACKGROUND_COLOR, paddingBottom: 75 }}
    >
      <View>
        <FlatList
          data={products3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={Header}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
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
    textAlign: 'center',
  },
});

export default Category2;
export { CategoryCard2, CategoryCard3, Header };
