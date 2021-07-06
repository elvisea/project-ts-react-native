import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 274px;
  height: 45px;
  background: ${({theme}) => theme.colors.yellow};
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.bold};
`;
