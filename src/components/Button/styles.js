import styled, { css } from 'styled-components'
import { THEME_COLORS } from '../../theme'

export const Btn = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${THEME_COLORS.PRIMARY};
  color: ${THEME_COLORS.PRIMARY};
  padding: 0.5em 1em;
  font-size: 1em;

  ${props => props.primary && css`
    background: ${THEME_COLORS.PRIMARY};
    color: ${THEME_COLORS.WHITE}
  `}

  ${props => props.success && css`
    border: 2px solid ${THEME_COLORS.SUCCESS};
    background: ${THEME_COLORS.SUCCESS};
    color: ${THEME_COLORS.WHITE}
  `}

  ${props => props.danger && css`
    border: 2px solid ${THEME_COLORS.DANGER};
    background: ${THEME_COLORS.DANGER};
    color: ${THEME_COLORS.WHITE}
  `}

  ${props => props.info && css`
    border: 2px solid ${THEME_COLORS.INFO};
    background: ${THEME_COLORS.INFO};
    color: ${THEME_COLORS.WHITE}
  `}
`;
