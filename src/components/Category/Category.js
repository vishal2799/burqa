import { View, Text, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import { products2 } from '../../../mockData';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import catCard from '../../../assets/CatalogPC.png';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Categories2')}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.DARK_COLOR,
          borderRadius: 10,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            width: '50%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: theme.WHITE_COLOR }}>New</Text>
        </View>
        <Image
          source={catCard}
          style={{ borderRadius: 10, width: '50%', height: 100 }}
        />
      </View>
    </Pressable>
  );
};

const HeaderComponent = () => (
  <View
    style={{
      backgroundColor: theme.SALE_HOT_COLOR,
      paddingHorizontal: 30,
      paddingVertical: 25,
      alignItems: 'center',
      marginBottom: 16,
      borderRadius: 8,
    }}
  >
    <Text
      style={[
        cStyles.Headline2,
        { textTransform: 'uppercase', color: theme.WHITE_COLOR },
      ]}
    >
      Summer Sales
    </Text>
    <Text style={[cStyles.DescItems, { color: theme.WHITE_COLOR }]}>
      Up to 50% off
    </Text>
  </View>
);

const Category = () => {
  const renderItem = ({ item }) => <CategoryCard data={item} />;

  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 65,
        backgroundColor: theme.BACKGROUND_COLOR,
      }}
    >
      <FlatList
        data={products2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  );
};

export default Category;
