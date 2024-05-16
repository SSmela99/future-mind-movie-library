import { useLocation } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";
import { isEmpty } from "lodash";
import { useQuery } from "@tanstack/react-query";

import { Container, Wrapper, Text } from "./styles";

import { fetchMovies } from "@/api/services";
import { FilterDataValues } from "@/types";
import { stringToObject } from "@/utils";

import MovieTile from "@/components/MoviesList/MovieTile";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";

const MoviesList = () => {
  const { search } = useLocation();
  const params = stringToObject(search);

  console.log(params);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["movies", params],
    queryFn: () => fetchMovies(params as FilterDataValues),
    enabled: !isEmpty(params),
  });

  if (isLoading || isEmpty(params) || data?.Response === "False") {
    return (
      <Container>
        <Wrapper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 328px)",
          }}
        >
          {isLoading && (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color=" #a72608"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          )}
          {isEmpty(params) && !isSuccess && <Text>Wyszukaj jakis film</Text>}
          {data?.Response === "False" && <Text>{data.Error}</Text>}
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        {data?.Search?.map((movie) => (
          <MovieTile key={movie.imdbID} {...movie} />
        ))}
      </Wrapper>

      <Pagination pages={parseInt(data?.totalResults as string, 10)} />
    </Container>
  );
};

export default Layout(MoviesList);
