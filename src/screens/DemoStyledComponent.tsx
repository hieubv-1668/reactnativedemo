import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

// Styled button component with dynamic styling
const StyledButton = styled(TouchableOpacity)`
  background-color: ${props => props.bgColor || '#6c757d'};
  padding: ${props => (props.large ? '20px' : '10px')};
  border-radius: 5px;
  align-items: center;
  margin: 10px;
  border-width: ${props => (props.outlined ? '2px' : '0')};
  border-color: ${props => (props.outlined ? '#007BFF' : 'transparent')};
`;

const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`;

const DemoStyledComponent = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StyledButton bgColor="#28a745" large>
        <ButtonText>Large Green Button</ButtonText>
      </StyledButton>
      <StyledButton outlined>
        <ButtonText>Outlined Button</ButtonText>
      </StyledButton>
    </SafeAreaView>
  );
};

export default DemoStyledComponent;
