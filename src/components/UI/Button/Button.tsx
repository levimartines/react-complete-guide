import styled from "styled-components";

const Button = styled.button<{invalid: boolean}>`
  width: auto;
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid ${props => props.invalid ? 'red' : '#40005d'};
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }
`;

export default Button;