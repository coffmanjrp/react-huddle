import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 100px 0 60px;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;

  img {
    margin-bottom: 2rem;
    display: block;
  }

  ul {
    padding: 0 1rem;
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`;
