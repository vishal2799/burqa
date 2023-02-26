import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import theme from '../../../styles/theme.style';
import Icon from '../Icon/Icon';
import cStyles from '../../../styles/styles';

const CustomBtn = ({
  type,
  size,
  styling,
  FSBtn,
  FSText,
  iconName,
  iconColor,
  iconSize,
  text,
  click,
  disabled,
}) => {
  switch (type) {
    case 'textOnly':
      return (
        <Pressable onPress={click} style={[FSBtn]}>
          <Text
            style={[cStyles.HelperText, { color: theme.WHITE_COLOR }, FSText]}
          >
            {text}
          </Text>
        </Pressable>
      );
    case 'icon':
      return (
        <Pressable style={[styles.btnIconSmActive, FSBtn]} onPress={click}>
          <Icon name={iconName} color={iconColor} size={+iconSize} />
        </Pressable>
      );
    case 'iconOnly':
      return (
        <Pressable onPress={click} style={[FSBtn]}>
          <Icon name={iconName} color={iconColor} size={+iconSize} />
        </Pressable>
      );
    case 'social':
      return (
        <Pressable style={[styles.btnSocial, FSBtn]}>
          <Icon name={iconName} color={iconColor} size={24} />
        </Pressable>
      );
    case 'iconWithText':
      return (
        <Pressable style={[styles.btnIconText, FSBtn]} onPress={click}>
          <Icon name={iconName} color={theme.WHITE_COLOR} size={+iconSize} />
          <Text style={styles.btnIconText_text}>{text}</Text>
        </Pressable>
      );
    case 'iconWithText1':
      return (
        <Pressable style={styles.btnIconText1} onPress={click}>
          <Icon name={iconName} color={theme.WHITE_COLOR} size={+iconSize} />
          <Text style={styles.btnIconText_text1}>{text}</Text>
        </Pressable>
      );
    default:
      break;
  }
  return (
    <Pressable
      style={
        size === 'small'
          ? styling === 'outline'
            ? [styles.btnOutlineSm]
            : [styles.btnSm]
          : styling === 'outline'
          ? [styles.btnOutlineBig]
          : [styles.btnBig]
      }
      onPress={click}
      disabled={disabled}
    >
      <Text
        style={[
          size === 'small'
            ? styling === 'outline'
              ? [styles.btnOutlineTextSm]
              : [styles.btnTextSm]
            : styling === 'outline'
            ? [styles.btnOutlineTextBig]
            : [styles.btnTextBig],
          //{ color: disabled ? 'green' : '' },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};
export default CustomBtn;

const styles = StyleSheet.create({
  btnIconSmActive: {
    backgroundColor: theme.DARK_COLOR,
    padding: 10,
    borderRadius: 50,
  },
  btnSocial: {
    backgroundColor: theme.WHITE_COLOR,
    paddingVertical: 20,
    paddingHorizontal: 34,
    borderRadius: 24,
  },
  btnIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 25,
  },
  btnIconText_text: {
    color: theme.ORDINARY_COLOR,
    marginLeft: 5,
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY2,
    lineHeight: 20,
  },
  btnIconText1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnIconText_text1: {
    color: theme.WHITE_COLOR,
    marginLeft: 5,
    fontSize: theme.HelperText,
    fontFamily: theme.FONT_FAMILY1,
  },
  btnSm: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    elevation: 3,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 25,
  },
  btnOutlineSm: {
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 3,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: theme.WHITE_COLOR,
  },
  btnOutlineBig: {
    paddingVertical: 14,
    paddingHorizontal: 80,
    elevation: 3,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: theme.WHITE_COLOR,
  },
  btnBig: {
    paddingVertical: 14,
    paddingHorizontal: 80,
    elevation: 3,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 25,
  },
  btnOutlineTextSm: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
  btnTextSm: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.ORDINARY_COLOR,
    textAlign: 'center',
  },
  btnTextBig: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.ORDINARY_COLOR,
    textAlign: 'center',
  },
  btnOutlineTextBig: {
    fontSize: theme.FONT_SIZE_LABEL,
    fontFamily: theme.FONT_FAMILY1,
    lineHeight: 20,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
});
