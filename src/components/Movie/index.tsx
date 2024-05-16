import { Link, useParams } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "@/api/services";

import { Container } from "@/components/MoviesList/styles";
import {
  Box,
  NoDataContainer,
  Image,
  Wrapper,
} from "@/components/Movie/styles";
import Layout from "@/components/Layout";

const Movie = () => {
  const { id } = useParams();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [`movie-${id}`],
    queryFn: () => fetchMovie(id as string),
  });

  if (isLoading) {
    return (
      <NoDataContainer>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color=" #a72608"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </NoDataContainer>
    );
  }

  if (isSuccess && data?.Response === "False") {
    return (
      <Container>
        <Wrapper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 328px)",
            flexDirection: "column",
          }}
        >
          <p>Nie znaleziono filmu :(</p>
          <Link to="/">Powrót do menu głównego</Link>
        </Wrapper>
      </Container>
    );
  }

  if (data?.Response === "True") {
    return (
      <Container>
        <Wrapper style={{ display: "flex" }}>
          <Image alt={`plakat-${data.Title}`} src={data.Poster} />
          <Box>
            <p>{data.Title}</p>
            <p>Released: {data.Released}</p>
            <p>Genre: {data.Genre}</p>
            <p>Director: {data.Director}</p>
            <p>Writer: {data.Writer}</p>
            <p>Country: {data.Country}</p>
            <p>{data.Plot}</p>
            <p>Actors: {data.Actors}</p>
            <p>Rating: {data.imdbRating}/10</p>
            <p>Language: {data.Language}</p>
            <p>Box Office: {data.BoxOffice ?? `uknown`}</p>
          </Box>
        </Wrapper>
      </Container>
    );
  }
};

export default Layout(Movie);
