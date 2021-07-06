import styled from 'styled-components/native';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 56px;
  background-color: ${({theme}) => theme.colors.background_color};
`;

export const ForgotPassword = styled(BorderlessButton)`
  margin-bottom: 15px;
  margin-top: 17px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_white};
`;

export const TextLoginSocial = styled.Text`
  color: ${({theme}) => theme.colors.text_white};
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: 20px;
`;

export const Register = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
`;

export const RegisterText = styled.Text`
  color: ${({theme}) => theme.colors.text_white};
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const RegisterLink = styled(BorderlessButton)``;

export const RegisterLinkText = styled.Text`
  color: ${({theme}) => theme.colors.yellow};
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.bold};
`;
