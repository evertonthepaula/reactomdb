import React from 'react';
import { useSelector } from 'react-redux';

import { Row, Col } from 'antd';
import Loading from '../../components/Loading';
import RatingBar from '../../components/RatingBar';
import EmptyResult from '../../components/EmptyResult';

import SearchMovies from '../../components/SearchMovies';
import BtnFavorite from '../../components/BtnFavorite';
import {
  Container,
  Result,
  Cover,
  Image,
  Info,
  InfoTitle,
  BoxContent,
  Favorite,
} from './styles';

export default function Dashboard() {
  const load = useSelector((state) => state.movies.loading);
  const movie = useSelector((state) => state.movies.movie);

  return (
    <Container>
      <SearchMovies />

      {load && <Loading />}

      {!load && !movie && <EmptyResult />}

      {!load && movie && (
        <>
          <Result>
            <Cover>
              <Image src={movie.Poster} alt={movie.Title} />
              <Favorite>
                <BtnFavorite />
              </Favorite>
            </Cover>

            <Info>
              <InfoTitle>{movie.Title}</InfoTitle>

              <Row>
                <Col span={24}>
                  <h3>Diretor</h3>
                  <p>{movie.Director}</p>
                </Col>

                <Col span={24}>
                  <h3>Atores</h3>
                  <p>{movie.Actors}</p>
                </Col>

                <Col span={24}>
                  <h3>Roteiristas</h3>
                  <p>{movie.Writer}</p>
                </Col>

                <h3>Enredo</h3>
                <p>{movie.Plot}</p>

                <Col xs={24} sm={24} md={8}>
                  <h3>Genero</h3>
                  <p>{movie.Genre}</p>
                </Col>

                <Col xs={24} sm={24} md={8}>
                  <h3>Ano</h3>
                  <p>{movie.Year}</p>
                </Col>

                <Col xs={24} sm={24} md={8}>
                  <h3>Lançamento</h3>
                  <p>{movie.Released}</p>
                </Col>

                <Col xs={24} sm={24} md={8}>
                  <h3>Tempo de filme</h3>
                  <p>Runtime {movie.Runtime}</p>
                </Col>

                <Col xs={24} sm={24} md={8}>
                  <h3>Classificação</h3>
                  <p>{movie.Rated}</p>
                </Col>

                <Col span={24}>
                  <h3>Premios e Avaliações</h3>
                  <p>{movie.Awards}</p>
                </Col>

                <BoxContent>
                  <h4>Metacritic</h4>
                  <RatingBar type="circle" rating={movie.Metascore} />
                  <p>Metascore: {movie.Metascore}</p>
                </BoxContent>

                <BoxContent>
                  <h4>Imdb</h4>
                  <RatingBar
                    type="circle"
                    rating={Number(movie.imdbRating) * 10}
                  />
                  <p>IMDB Rating: {movie.imdbRating}</p>
                  <p>Votos: {movie.imdbVotes}</p>
                </BoxContent>

                {movie.Ratings.map((rating) =>
                  rating.Source === 'Rotten Tomatoes' ? (
                    <BoxContent key={rating.Source}>
                      <h4>Rotten Tomatoes</h4>
                      <RatingBar
                        type="circle"
                        rating={rating.Value.replace('%', '')}
                      />
                      <p>TOMATOMETER: {rating.Value}</p>
                    </BoxContent>
                  ) : (
                    ''
                  )
                )}
              </Row>
            </Info>
          </Result>
        </>
      )}
    </Container>
  );
}
