import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { products } from '../../../mockData';
import Tag from '../Tag/Tag';
import CustomBtn from '../CustomBtn/CustomBtn';
import ProductCardTwo from '../ProductCardTwo/ProductCardTwo';
import ProductCard from '../ProductCard/ProductCard';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Filters = ({ grid, pricePress }) => {
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
      />
      <CustomBtn
        type='iconWithText1'
        iconName='swap-vertical'
        text='Price: lowest to high'
        iconSize={20}
        iconColor={theme.WHITE_COLOR}
        click={pricePress}
      />
      <CustomBtn
        type='iconOnly'
        iconName={grid ? 'grid' : 'list'}
        iconSize={20}
        iconColor={theme.WHITE_COLOR}
      />
    </View>
  );
};

const Temp = () => {
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

  let grid = false;

  const renderItem = ({ item, index }) => (
    <View style={{ marginRight: 10 }}>
      <Tag active={false} type='simple' />
    </View>
  );
  const renderItem1 = ({ item }) => (
    <ProductCardTwo
      data={item}
      width={150}
      label={true}
      labelName='discount'
      labelText='-20%'
    />
  );

  const renderItem2 = ({ item }) => (
    <ProductCard
      data={item}
      width='47%'
      label={true}
      labelName='discount'
      labelText='-20%'
    />
  );

  return (
    <SafeAreaView style={{ backgroundColor: theme.BACKGROUND_COLOR, flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.BACKGROUND_COLOR,
          flex: 1,
          marginBottom: 50,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <Filters grid={grid} pricePress={handlePresentModalPress} />
        {grid ? (
          <View
            style={{
              paddingHorizontal: 15,
              marginBottom: 70,
            }}
          >
            <FlatList
              data={products}
              renderItem={renderItem1}
              keyExtractor={(item) => item.id}
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
              data={products}
              numColumns={2}
              renderItem={renderItem2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              keyExtractor={(item) => item.id}
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

export { Temp };
