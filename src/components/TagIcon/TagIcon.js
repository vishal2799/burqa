import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';
import Icon from '../Icon/Icon';

const TagIcon = ({ type, FSTagBtn, FSTagText, active, text, press }) => {
  //let active = false;
  return (
    <Pressable
      style={
        active
          ? type === 'ordinary'
            ? [styles.tagActiveO, FSTagBtn]
            : [styles.tagSmActive, FSTagBtn]
          : type === 'ordinary'
          ? [styles.tagO, FSTagBtn]
          : [styles.tagSm, FSTagBtn]
      }
      onPress={press}
    >
      <Text
        style={
          active
            ? type === 'ordinary'
              ? [styles.tagActiveOText, FSTagText]
              : [styles.tagSmActiveText, FSTagText]
            : type === 'ordinary'
            ? [styles.tagOText, FSTagText]
            : [styles.tagSmText, FSTagText]
        }
      >
        {text}
      </Text>
      <Icon name='chevron-down' size={15} color={theme.WHITE_COLOR} />
    </Pressable>
  );
};

export default TagIcon;

const styles = StyleSheet.create({
  tagSmActive: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagSmActiveText: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
  tagSm: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: theme.WHITE_COLOR,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagSmText: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.DARK_COLOR,
    textAlign: 'center',
  },
  tagO: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagOText: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.DARK_COLOR,
    textAlign: 'center',
  },
  tagActiveO: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.WHITE_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagActiveOText: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
});
