import styled from 'styled-components/native';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  background-color: #0e4ebb;
`;

export const Register = styled.Text`
  font-size: 40px;
  font-family: ${({theme}) => theme.fonts.bold};
  height: 56px;
  color: #fff;
  margin-top: 12px;
  margin-bottom: 26px;
`;

export const Fields = styled.View`
  width: 100%;
  margin-bottom: 51px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 24px;
`;

export const RegisterText = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: #fff;
`;

export const RegisterLink = styled(BorderlessButton)``;

export const RegisterLinkText = styled.Text`
  color: #ffbc00;
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
