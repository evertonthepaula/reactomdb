import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Drawer } from 'antd';
import { Container, NavItem, Navlink, FavoriteItem } from './styles';
import { signOut } from '../../store/modules/auth/actions';
import { moviesSetActive } from '../../store/modules/movies/actions';

export default function Header() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const [visible, setVisible] = useState(false);

  function showDrawer() {
    setVisible(true);
  }

  function chooseMovie(movie) {
    dispatch(moviesSetActive(movie));
    setVisible(false);
  }

  function handleSignOut(e) {
    e.preventDefault();
    dispatch(signOut());
  }

  return (
    <Container>
      <NavItem onClick={handleSignOut}>Sair do Sistema</NavItem>

      <Navlink to="/">Home</Navlink>

      <NavItem onClick={showDrawer}>Favoritos</NavItem>

      <Drawer
        title="Escolha entre seus favoritos"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {favorites.length === 0 && <span>Nemhum favorito selecionado</span>}

        {favorites.map((movie) => (
          <FavoriteItem key={movie.Title} onClick={() => chooseMovie(movie)}>
            {movie.Title} - {movie.Year}
          </FavoriteItem>
        ))}
      </Drawer>
    </Container>
  );
}
