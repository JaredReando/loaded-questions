import React from 'react';
import styled from 'styled-components';
import {space, color, SpaceProps, ColorProps} from 'styled-system';

export const ThemeHeader = styled.h1((props) => {
    return ({
        fontFamily: props.theme.text.fontFamily,
        color: props.theme.colors.success,
        fontSize: props.theme.text.size.xlarge,
    })
});

export const AppText: React.FC<SpaceProps & ColorProps> = styled.p(
    space,
    color,
);

