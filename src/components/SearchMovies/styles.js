import styled, { css } from 'styled-components';

const status = {
  default: css`
    border-color: var(--color-smoke);
  `,

  Required: css`
    border-color: var(--color-red-dark);
    box-shadow: 0 0 0 1px inset var(--color-red-dark);
    color: var(--color-red-dark);

    &:focus {
      outline: solid 1px var(--color-red-dark);
    }
    ::placeholder {
      color: var(--color-red-dark);
    }
  `,
};

export const Input = styled.input`
  width: 100%;
  height: 34px;
  padding: 0 4px;
  position: relative;
  border: 1px solid var(--color-smoke);
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  font-weight: 700;

  ${(props) => status[props.status || 'default']}
`;

export const Form = styled.form`
  margin: 16px 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    margin: 4px 0 0;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 400px;
  margin-right: 8px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-purple-dark);
`;

export const Info = styled.small`
  display: block;
  height: 16px;
`;
