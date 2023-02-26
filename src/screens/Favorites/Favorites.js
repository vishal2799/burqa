import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useRef, useMemo, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { products } from '../../../mockData';
import Tag from '../../components/Tag/Tag';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import ProductCardTwo from '../../components/ProductCardTwo/ProductCardTwo';
import ProductCard from '../../components/ProductCard/ProductCard';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

const Filters = ({ grid, pricePress, gridPress, filterPress }) => {
  return (
    <View
      style={{
        marginTop: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <CustomBtn
        type='iconWithText1'
        iconName='filter'
        text='Filters'
        iconSize={20}
        iconColor={theme.WHITE_COLOR}
        click={filterPress}
      />
      <CustomBtn
        type='iconWithText1'
        iconName='swap-vertical'
        text='Price: lowest to high'
        iconSize={20}
        iconColor={theme.WHITE_COLOR}
        click={() => pricePress('sort')}
      />
      <CustomBtn
        type='iconOnly'
        iconName={grid ? 'grid' : 'list'}
        iconSize={20}
        iconColor={theme.WHITE_COLOR}
        click={gridPress}
      />
    </View>
  );
};

const SortSheet = () => {
  return (
    <View>
      <Text style={[styles.bsTitle, cStyles.Headline3]}>Sort by</Text>
      <View style={{ paddingVertical: 10 }}>
        <CustomBtn type='textOnly' text='Popular' FSBtn={[styles.bsBtn]} />
        <CustomBtn type='textOnly' text='Popular' FSBtn={styles.bsBtn} />
        <CustomBtn
          type='textOnly'
          text='Popular'
          FSBtn={[
            styles.bsBtn,
            {
              backgroundColor: theme.PRIMARY_COLOR,
              color: theme.DARK_COLOR,
            },
          ]}
        />
        <CustomBtn type='textOnly' text='Popular' FSBtn={styles.bsBtn} />
      </View>
    </View>
  );
};

const FavSheet = () => {
  return (
    <View style={{ paddingVertical: 16 }}>
      <Text
        style={[
          cStyles.Headline3,
          {
            color: theme.WHITE_COLOR,
            fontFamily: theme.FONT_FAMILY2,
            textAlign: 'center',
          },
        ]}
      >
        Select size
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 20,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((e, i) => (
          <View
            style={{
              //marginLeft: i !== 0 || i !== 3 ? 10 : 0,
              width: '30%',
              marginBottom: 10,
            }}
            key={i + 'size'}
          >
            <Tag active={true} type='ordinary' text='S' />
          </View>
        ))}
      </View>
      <View
        style={{
          padding: 15,
          borderBottomWidth: 0.4,
          borderBottomColor: theme.GRAY_COLOR,
          borderTopWidth: 0.4,
          borderTopColor: theme.GRAY_COLOR,
          marginBottom: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={[cStyles.SubHeads, { color: theme.WHITE_COLOR }]}>
          Size Info
        </Text>
        <CustomBtn
          type='iconOnly'
          iconName='chevron-forward'
          iconSize={20}
          iconColor={theme.WHITE_COLOR}
        />
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <CustomBtn text='ADD TO FAVORITES' />
      </View>
    </View>
  );
};

const Favorites = () => {
  const [sortSheet, setSortSheet] = useState(false);

  const navigation = useNavigation();

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '60%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSheetModal = (type) => {
    if (type === 'sort') {
      setSortSheet(true);
      handlePresentModalPress();
    } else {
      setSortSheet(false);
      handlePresentModalPress();
    }
  };

  const [grid, setGrid] = useState(false);

  const renderItem = ({ item, index }) => (
    <View style={{ marginRight: 10, width: 100 }}>
      <Tag active={false} type='simple' text='Hello' />
    </View>
  );
  const renderItem1 = ({ item }) => (
    <ProductCardTwo
      data={item}
      width={150}
      label={true}
      labelName='discount'
      labelText='-20%'
      where='favorite'
      addToFav={handleSheetModal}
    />
  );

  const renderItem2 = ({ item }) => (
    <ProductCard
      data={item}
      width='47%'
      label={true}
      labelName='discount'
      labelText='-20%'
      where='favorite'
      addToFav={handleSheetModal}
    />
  );

  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          flex: 1,
          marginBottom: 50,
        }}
      >
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
          <View></View>
          <Text style={[cStyles.Headline3, { color: theme.WHITE_COLOR }]}>
            Favorites
          </Text>
          <CustomBtn
            type='iconOnly'
            iconName='search'
            iconSize={24}
            iconColor={theme.WHITE_COLOR}
          />
        </View>
        <View style={{ marginLeft: 10, paddingBottom: 15, paddingTop: 5 }}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <Filters
          grid={grid}
          pricePress={handleSheetModal}
          gridPress={() => setGrid((prevGrid) => !prevGrid)}
          filterPress={() => navigation.navigate('Filters')}
        />
        {grid ? (
          <View
            style={{
              paddingHorizontal: 15,
              marginBottom: 70,
              paddingVertical: 15,
            }}
          >
            <FlatList
              data={products}
              renderItem={renderItem1}
              key={'_'}
              keyExtractor={(item) => '_' + item.id}
              ItemSeparatorComponent={() => (
                <View style={{ marginBottom: 30 }}></View>
              )}
            />
          </View>
        ) : (
          <View
            style={{
              paddingVertical: 15,
              marginBottom: 70,
              alignItems: 'center',
            }}
          >
            <FlatList
              key={'#'}
              keyExtractor={(item) => '#' + item.id}
              data={products}
              numColumns={2}
              renderItem={renderItem2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              ItemSeparatorComponent={() => (
                <View style={{ marginBottom: 20 }}></View>
              )}
            />
          </View>
        )}
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ backgroundColor: theme.GRAY_COLOR }}
        backgroundStyle={{ backgroundColor: theme.DARK_COLOR }}
      >
        <View style={{ flex: 1 }}>
          {sortSheet === true ? <SortSheet /> : <FavSheet />}
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bsTitle: {
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
  bsBtn: {
    padding: 15,
    width: '100%',
  },
});

export default Favorites;
