import styled from 'styled-components'
import { THEME_COLORS } from '../../theme'

export const Container = styled.header`
  background: ${THEME_COLORS.PAGE_BG};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  background: ${THEME_COLORS.PAGE_BG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
