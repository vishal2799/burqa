import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../../../styles/theme.style';
import cStyles from '../../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBtn from '../../components/CustomBtn/CustomBtn';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  name: yup.string().required('Name is Required'),
});

const Header = ({ navigation }) => (
  <View
    style={{
      paddingTop: 15,
      paddingBottom: 12,
      paddingHorizontal: 12,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <CustomBtn
      type='iconOnly'
      iconName='chevron-back'
      iconSize={24}
      iconColor={theme.WHITE_COLOR}
      click={() => navigation.goBack()}
    />
  </View>
);

const SignUp = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <>
      <StatusBar backgroundColor='red' barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.container,
            { backgroundColor: theme.BACKGROUND_COLOR },
          ]}
        >
          <View>
            <Header />
            <Text
              style={[
                cStyles.Headline,
                {
                  color: theme.WHITE_COLOR,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                },
              ]}
            >
              Sign up
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              paddingVertical: 50,
            }}
          >
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ email: '', password: '', name: '' }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                dirty,
              }) => (
                <View style={{ paddingHorizontal: 16 }}>
                  <TextInput
                    name='name'
                    placeholder='Name'
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    keyboardType='name'
                    placeholderTextColor={theme.WHITE_COLOR}
                  />
                  {errors.name && touched.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                  <TextInput
                    name='email'
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType='email-address'
                    placeholderTextColor={theme.WHITE_COLOR}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <TextInput
                    name='password'
                    placeholder='Password'
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholderTextColor={theme.WHITE_COLOR}
                    secureTextEntry
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                    <CustomBtn
                      type='textOnly'
                      text='Already have an account?'
                    />
                  </View>
                  <View style={{ marginTop: 30 }}>
                    <CustomBtn
                      text='SIGN UP'
                      disabled={!(isValid && dirty)}
                      click={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View style={{ paddingHorizontal: 75 }}>
              <Text
                style={[
                  cStyles.SubHeads,
                  {
                    color: theme.WHITE_COLOR,
                    paddingVertical: 10,
                    textAlign: 'center',
                    fontFamily: theme.FONT_FAMILY1,
                  },
                ]}
              >
                or sign up with social account
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 8 }}>
                  <CustomBtn
                    iconName='logo-google'
                    iconSize={24}
                    iconColor={theme.DARK_COLOR}
                    type='social'
                  />
                </View>
                <View style={{ marginHorizontal: 8 }}>
                  <CustomBtn
                    iconName='logo-facebook'
                    iconSize={24}
                    iconColor={theme.DARK_COLOR}
                    type='social'
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  input: {
    color: theme.WHITE_COLOR,
    backgroundColor: theme.DARK_COLOR,
    color: theme.GRAY_COLOR,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
});

export default SignUp;
