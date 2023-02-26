import { StyleSheet, Text } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';

const Label = ({ type, FSLabel, text }) => {
  return (
    <Text
      style={
        type !== 'new' ? [styles.label2, FSLabel] : [styles.label, FSLabel]
      }
    >
      {text}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    fontFamily: theme.FONT_FAMILY2,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 7,
    textTransform: 'uppercase',
  },
  label2: {
    fontFamily: theme.FONT_FAMILY2,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.WHITE_COLOR,
    backgroundColor: theme.SALE_HOT_COLOR,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 7,
    textTransform: 'uppercase',
  },
});
