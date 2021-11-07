import styled from 'styled-components'
import { THEME_COLORS } from '../../theme'

export const Container = styled.header`
  background: ${THEME_COLORS.PAGE_BG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 5em;
`;

export const Logo = styled.div`
  width: 120px;

  img {
    width: 100%;
  }
`;