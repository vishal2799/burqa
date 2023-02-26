import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../Icon/Icon';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';

const Rating = () => (
  //<Icon name='star' size='36' color='#FFBA49' />
  //<Ionicons name='star' size={36} color='#FFBA49' />

  <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 7 }}>
    <View style={{ flexDirection: 'row' }}>
      <Icon
        name='star'
        size='14'
        color='#FFBA49'
        iconStyles={{ marginRight: 3 }}
      />
      <Icon
        name='star'
        size='14'
        color='#FFBA49'
        iconStyles={{ marginRight: 3 }}
      />
      <Icon
        name='star'
        size='14'
        color='#FFBA49'
        iconStyles={{ marginRight: 3 }}
      />
      <Icon
        name='star'
        size='14'
        color='#FFBA49'
        iconStyles={{ marginRight: 3 }}
      />
      <Icon
        name='star'
        size='14'
        color='#FFBA49'
        iconStyles={{ marginRight: 3 }}
      />
    </View>
    <Text style={[cStyles.HelperText, { color: theme.WHITE_COLOR }]}>(0)</Text>
  </View>
);

export default Rating;

const styles = StyleSheet.create({});
