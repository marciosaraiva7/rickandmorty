import styled, {css} from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.View`
  background: ${props => props.theme.background};
  width: 100%;
  height: auto;
  padding: 0 10px 0 10px;
  flex-direction: row;
  box-sizing: border-box;
`
export const Name = styled.Text`
  font-size: 18px;
  color: #000000;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ContainerItem = styled.View`
  width: auto;
  height: auto;
  flex-direction: row;
  margin: 0;
`;

export const Item = styled.TouchableOpacity`
  width: auto;
  height: auto;
  flex-direction: column;
  margin: 10px;
  background-color: #dadedf;
  border-radius: 13px;


`;

