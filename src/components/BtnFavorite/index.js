import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrFavorite } from 'react-icons/gr';
import { Tooltip } from 'antd';
import Button from '../../styles/components/button';

import { favoriteAdd } from '../../store/modules/favorites/actions';

export default function AddFavorite() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);

  function add() {
    dispatch(favoriteAdd(movie));
  }

  return (
    <Tooltip placement="right" title="Adicionar aos favoritos">
      <Button className="purple" onClick={add}>
        <GrFavorite />
      </Button>
    </Tooltip>
  );
}
