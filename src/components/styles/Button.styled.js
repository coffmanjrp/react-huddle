import styled from 'styled-components';

export const Button = styled.button`
  margin: 1rem 0;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
