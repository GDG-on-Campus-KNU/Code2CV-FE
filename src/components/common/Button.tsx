import type { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import type { Styles } from '@/types';
import { vars } from '@/constants/vars';

interface Props extends PropsWithChildren, Styles {
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
    variant: 'primary' | 'secondary' | 'disabled' | 'completed';
}

const StyledButton = styled.button<Omit<Props, 'label'>>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    ${({ size }) => vars.button[size]};
    ${({ variant }) => vars.combinationColor[variant]};
    ${({ sx }) => sx};
`;

export const Button: FC<Props> = ({ onClick, size, variant, children, sx }) => {
    return (
        <StyledButton onClick={onClick} size={size} variant={variant} sx={sx}>
            {children}
        </StyledButton>
    );
};
