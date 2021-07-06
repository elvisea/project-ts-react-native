import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.colors.color_text};
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
