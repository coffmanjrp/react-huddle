import styled from 'styled-components';

export const StyledSocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    text-decoration: none;
  }
`;
