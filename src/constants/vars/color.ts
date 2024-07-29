export const color = {
    primary: '#8957E5',
    secondary: '#F4EEFF',
    white: '#FFFFFF',
    gray3: '#E9EBEE',
    gray2: '#AEACB3',
};

export const combinationColor = {
    primary: `background: ${color.primary}; color: ${color.white};`,
    secondary: `background: ${color.white}; color: ${color.primary}; border: 1.2px solid ${color.primary};`,
    disabled: `background: ${color.gray3}; color: ${color.gray2}; cursor: not-allowed;`,
    completed: `background: ${color.secondary}; color: ${color.primary};`,
};
