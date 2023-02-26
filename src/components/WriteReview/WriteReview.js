import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import theme from '../../../styles/theme.style';
import CustomBtn from '../CustomBtn/CustomBtn';
import cStyles from '../../../styles/styles';
import Icon from '../Icon/Icon';

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [text, onChangeText] = React.useState('');

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[
            cStyles.Headline2,
            { color: theme.WHITE_COLOR, fontFamily: theme.FONT_FAMILY2 },
          ]}
        >
          What is your rate?
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
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
        <Text
          style={[
            cStyles.Headline3,
            {
              color: theme.WHITE_COLOR,
              fontFamily: theme.FONT_FAMILY2,
              marginTop: 30,
              paddingHorizontal: 70,
              textAlign: 'center',
            },
          ]}
        >
          Please share your opinion about the product
        </Text>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          multiline
          numberOfLines={10}
          placeholder='Your Review'
          placeholderTextColor={theme.WHITE_COLOR}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingVertical: 25,
        }}
      >
        <Pressable style={styles.cameraBtn}>
          <Icon
            name='camera'
            size={24}
            color={theme.WHITE_COLOR}
            iconStyles={styles.camera}
          />
          <Text
            style={[
              cStyles.HelperText,
              { color: theme.WHITE_COLOR, marginTop: 12 },
            ]}
          >
            Add your photos
          </Text>
        </Pressable>
        <View></View>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <CustomBtn text='Send Review' size='big' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    marginRight: 20,
  },
  input: {
    color: theme.WHITE_COLOR,
    textAlignVertical: 'top',
    backgroundColor: theme.DARK_COLOR,
    color: theme.GRAY_COLOR,
    borderRadius: 10,
    padding: 10,
  },
  cameraBtn: {
    padding: 10,
    alignItems: 'center',
    elevation: 1,
  },
  camera: {
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 13,
    borderRadius: 50,
  },
});

export default WriteReview;
