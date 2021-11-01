import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || 'row'};
  align-items: center;
  margin: 40px 0;
  padding: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
