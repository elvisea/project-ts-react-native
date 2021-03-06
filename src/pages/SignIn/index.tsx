import React, {useState} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ForgotPassword,
  ForgotPasswordText,
  TextLoginSocial,
  Register,
  RegisterText,
  RegisterLink,
  RegisterLinkText,
} from './styles';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';
import logoFacebook from '../../assets/facebook.png';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleLogin() {
    console.log(email, password);
    const data = {
      email,
      password,
    };
    console.log('data => ', data);
  }

  return (
    <Container>
      <Image style={{marginTop: 62.2, marginBottom: 29.82}} source={logoImg} />

      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />

      <ForgotPassword
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <ForgotPasswordText>Esqueceu a senha</ForgotPasswordText>
      </ForgotPassword>

      <Button title="Login" onPress={handleLogin} />

      <TextLoginSocial>Ou Login com</TextLoginSocial>
      <Image source={logoFacebook} />

      <Register>
        <RegisterText>Não tem conta? </RegisterText>
        <RegisterLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <RegisterLinkText>Cadastre-se!</RegisterLinkText>
        </RegisterLink>
      </Register>
    </Container>
  );
};

export default SignIn;
