import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  InfoContainer,
  RegisterText,
  Register,
  Fields,
  RegisterLinkText,
  RegisterLink,
} from './styles';

import Input from '../../components/Input';

import registerImg from '../../assets/register.png';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image style={{marginTop: 62.2}} source={registerImg} />
      <Register>Cadastro</Register>

      <Fields>
        <Input placeholder="Nome Completo" />
        <Input placeholder="CPF" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />

        <InfoContainer>
          <RegisterText>Li e aceito os </RegisterText>
          <RegisterLink>
            <RegisterLinkText>Termos de Uso </RegisterLinkText>
          </RegisterLink>
          <RegisterText>e as </RegisterText>
          <RegisterLink>
            <RegisterLinkText>Políticas de Privacidade.</RegisterLinkText>
          </RegisterLink>
        </InfoContainer>

        <Input placeholder="Token de Indicação (Opcional)" />
      </Fields>

      <Button
        title="Salvar"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </Container>
  );
};

export default SignUp;
