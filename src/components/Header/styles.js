import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  height: 80px;
  background-color: var(--color-purple-dark);
`;

export const Navlink = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 100%;

  text-align: center;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 0 16px;
  transition: color 0.2s;

  &:first-child {
    margin-left: 30px;
  }
  &:hover {
    color: #311038;
    cursor: pointer;
  }
`;

export const NavItem = styled.span`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 16px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #311038;
    cursor: pointer;
  }
`;

export const FavoriteItem = styled.span`
  display: block;
  margin: 8px 0;
  color: #311038;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #311038;
    transform: translateX(-100%);
    transition: transform 0.2s;
  }
  &:hover {
    color: var(--color-purple-dark);

    &:after {
      transform: translateX(0);
      background-color: var(--color-purple-dark);
    }
  }
`;
