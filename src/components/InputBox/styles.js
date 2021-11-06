import styled, { css } from 'styled-components'
import { THEME_COLORS } from '../../theme'

export const Input = styled.input`
  background: ${THEME_COLORS.INPUT_BG};
  border: none;
  color: ${THEME_COLORS.TEXT};
  font-weight: 600;
  padding: 0.8em 1.5em;
  width: 300px;
  height: 1.5rem;
  margin: 1em;
  font-family: 'Balsamiq Sans', cursive;

  &::placeholder {
    font-style: italic;
    color: ${THEME_COLORS.TEXT};
    font-weight: 700;
  }
  
  ${props => props.small && css`
    padding: 0.5em 1em;
    width: 200px;
    height: 1rem;
  `}
  
  ${props => props.large && css`
    padding: 1em 2em;
    width: 400px;
    height: 2rem;
  `}
`;
