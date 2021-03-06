import styled, { css } from 'styled-components'

type ButtonProps = {
  variant?: string
}

export const Button = styled.button<ButtonProps>`
  height: 3.125rem;
  border-radius: 8px;
  font-weight: 500;

  ${props =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      box-shadow: 0px 0px 5px ${props.theme.purple};
      color: ${props.theme.purple};

      &:hover {
        background: ${props => props.theme.purple};
        color: ${props => props.theme.white};
      }
    `}

  ${props =>
    props.variant === 'danger' &&
    css`
      background: ${props => props.theme.danger};
      color: #fff;
    `}
  
  ${props =>
    props.variant === 'secondary' &&
    css`
      background: ${props => props.theme.grayLight};
      color: ${props => props.theme.grayDark};
    `}

  ${props =>
    !props.variant &&
    css`
      background: ${props => props.theme.purple};
      color: ${props => props.theme.white};

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }
    `}

  padding: 0 2rem;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  cursor: pointer;

  img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
