import React from 'react';

import { Empty } from 'antd';

import Info from './styles';

import camera from '../../assets/img/camera.png';

export default function EmptyResult() {
  return (
    <Empty
      image={camera}
      imageStyle={{
        height: 60,
      }}
      description={<Info>Nenhum Resultado encontrado nos arquivos OMDb.</Info>}
    />
  );
}
