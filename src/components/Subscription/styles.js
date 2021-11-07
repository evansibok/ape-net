import styled from 'styled-components'
import { THEME_COLORS } from '../../theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 1em;
  }
`;

export const Subbed = styled.div`
  font-family: 'Balsamiq Sans', cursive;

  span {
    &.user-name {
      font-weight: 700;
      font-size: 1.2rem;
      color: ${THEME_COLORS.PRIMARY};
    }

    &.user-email {
      font-weight: 700;
      font-size: 1.2rem;
      color: ${THEME_COLORS.PRIMARY};
    }
  }
`;
