import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({email, password});
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .then(result => {
        console.log(result);
        alert('success');
      })
      .catch(error => {
        console.log(error);
        alert('wrong password or email');
      });
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/Login.png')}
        style={styles.loginImage}
      />
      <Text style={styles.innerContainer}>Log in to your account</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Your Email"
        style={styles.textinput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.textinput2}
      />

      <View style={styles.innerContainerView}>
        <Text style={{fontSize: 12}}>Remember me</Text>
        <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{fontSize: 12}}>Forgotten Password?</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.loginView} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orView}>
        <Text>OR</Text>
      </View>
      <TouchableOpacity style={styles.loginGoogle}>
        <View style={styles.loginGoogleView}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <Image
              source={require('../../../assets/google.png')}
              style={styles.googleImage}
            />
            <Text style={styles.loginGoogleText}>Log in with Google</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.dontHaveText}>
        Don't have an account?{' '}
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  loginImage: {
    height: 235,
    width: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  textinput: {
    width: '90%',
    backgroundColor: '#ebedf0',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textinput2: {
    width: '90%',
    backgroundColor: '#ebedf0',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  innerContainerView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignSelf: 'center',
  },
  loginView: {
    marginTop: 30,
    width: '90%',
    borderRadius: 6,
    paddingVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D4990',
  },
  loginText: {
    fontSize: 16,
    color: '#fefe',
    alignSelf: 'center',
    fontWeight: '600',
  },
  orView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginGoogle: {
    marginTop: 15,
    width: '90%',
    borderRadius: 6,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ebedf0',
    paddingVertical: 10,
  },
  googleImage: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginLeft: 30,
  },
  loginGoogleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  loginGoogleText: {
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 20,
  },
  dontHaveText: {
    alignSelf: 'center',
    fontSize: 12,
    marginTop: 10,
  },
  signUpText: {
    color: '#2D4990',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});

export default Login;
