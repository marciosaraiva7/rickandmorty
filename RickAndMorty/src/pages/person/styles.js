import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: auto;
  padding: 0 10px 0 10px;
  background: ${props => props.theme.background}
  
  
`
export const Name = styled.Text`
  font-size: 18px;
  color: #000000;
`;

export const Photo = styled.Image`
  width: 350px;
  height: 350px;
  border-radius: 12px

`;