import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled(TextInput)`
  width: 100%;
  font-size: 14px;
  color: ${({theme}) => theme.colors.color_text};
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 8px;
  margin-bottom: 8px;
  font-family: ${({theme}) => theme.fonts.regular};
  height: 45px;
`;
