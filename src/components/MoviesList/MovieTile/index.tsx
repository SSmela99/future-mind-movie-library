import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Tile } from "@/components/MoviesList/MovieTile/styles";
import { MovieTileProps } from "@/types";

const MovieTile = (props: MovieTileProps) => {
  const { Title, Poster, Year, imdbID } = props;

  const navigation = useNavigate();

  const goToMovie = useCallback(() => {
    navigation(`/movie/${imdbID}`);
  }, [imdbID, navigation]);

  return (
    <Tile>
      <p onClick={goToMovie}>
        {Title}, {Year}
      </p>
      <img src={Poster} onClick={goToMovie} />
    </Tile>
  );
};

export default MovieTile;
