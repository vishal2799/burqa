import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import CustomBtn from '../CustomBtn/CustomBtn';

const StarRating = () => {
  //<Icon name='star' size='36' color='#FFBA49' />
  //<Ionicons name='star' size={36} color='#FFBA49' />
  const [rating, setRating] = useState(0);

  return (
    <View style={{ flexDirection: 'row' }}>
      {[1, 2, 3, 4, 5].map((e, index) => {
        index += 1;
        return (
          <CustomBtn
            type='iconOnly'
            iconName={index <= rating ? 'star' : 'star-outline'}
            iconSize={36}
            iconColor={index <= rating ? '#FFBA49' : theme.GRAY_COLOR}
            click={() => setRating(index)}
            FSBtn={index !== 5 ? styles.rate : ''}
          />
        );
      })}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  rate: {
    marginRight: 20,
  },
});
