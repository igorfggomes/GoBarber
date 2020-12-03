import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container { ...rest }>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;