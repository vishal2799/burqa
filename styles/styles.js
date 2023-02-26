import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style.js';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  HeadingContainer: {
    paddingHorizontal: 22,
    paddingVertical: 20,
    width: '55%',
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
  },
  Headline1: {
    fontSize: theme.FONT_SIZE_H2,
    lineHeight: 32,
    fontFamily: 'Roboto_700Bold',
  },
  Headline: {
    fontSize: theme.FONT_SIZE_H3,
    lineHeight: 32,
    fontFamily: 'Roboto_700Bold',
  },
  Headline2: {
    fontSize: theme.FONT_SIZE_H4,
    lineHeight: 28,
    fontFamily: 'Roboto_400Regular',
  },
  Headline3: {
    fontSize: theme.FONT_SIZE_H5,
    lineHeight: 22,
    fontFamily: 'Roboto_400Regular',
  },
  SubHeads: {
    fontSize: theme.FONT_SIZE_P,
    lineHeight: 16,
    fontFamily: 'Roboto_700Bold',
  },
  Text1: {
    fontSize: theme.FONT_SIZE_P,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
  },
  DescItems: {
    fontSize: theme.FONT_SIZE_LABEL,
    lineHeight: 20,
    fontFamily: 'Roboto_400Regular',
  },
  DescText: {
    fontSize: theme.FONT_SIZE_LABEL,
    lineHeight: 21,
    letterSpacing: -2,
    fontFamily: 'Roboto_400Regular',
  },
  HelperText: {
    fontSize: theme.FONT_SIZE_SMALL,
    lineHeight: 12,
    fontFamily: 'Roboto_400Regular',
  },
});
