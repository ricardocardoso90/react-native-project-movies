import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import {
  Container,
  TextMovies,
  MovieItem,
  MovieImage,
  MovieTitle,
  LoadingArea,
  LoadingText
} from './styles';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function requestMovies() {
    setLoading(true);
    const res = await fetch('https://api.b7web.com.br/cinema/');
    const json = await res.json();

    if (json) {
      setMovies(json);
    }

    setLoading(false);
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <Container>
      <TextMovies>Total de filmes: {movies.length}</TextMovies>
      {loading
        ? (
          <LoadingArea>
            <ActivityIndicator
              size="large"
              color="#FFF"
            />
            <LoadingText>Carregando Filmes</LoadingText>
          </LoadingArea>
        )
        : (
          <FlatList
            style={{ flex: 1 }}
            data={movies}
            keyExtractor={item => item.titulo}
            renderItem={({ item }) => (
              <MovieItem>
                <MovieImage source={{ uri: item.avatar }} resizeMode="contain" />
                <MovieTitle>{item.titulo}</MovieTitle>
              </MovieItem>
            )}
          />
        )
      }
    </Container>
  );
}
