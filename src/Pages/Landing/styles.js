import styled from 'styled-components'
import { THEME_COLORS } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${THEME_COLORS.PAGE_BG};
  min-height: 100vh;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-top: 2em;
  
    h2 {
      font-family: 'Chela One', cursive;
      font-size: 2.3rem;
      text-transform: capitalize;
      text-align: center;
      margin: 0;
    }
  
    h5 {
      font-family: 'Balsamiq Sans', cursive;
      font-size: 1.2rem;
      text-align: center;
      font-weight: 400;
    }
  }
`;