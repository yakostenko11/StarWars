import { FilmActions, FilmActionTypes, FilmsState } from "./types";

const initialFilmsState: FilmsState = {
  films: [],
  selectedCharacterFilms: [],
  loading: false,
  error: null,
};

const filmsReducer = (
  state: FilmsState = initialFilmsState,
  action: FilmActions
): FilmsState => {
  switch (action.type) {
    case FilmActionTypes.FETCH_FILMS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FilmActionTypes.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: [...state.films, ...action.payload.films],
      };
    case FilmActionTypes.FETCH_FILMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FilmActionTypes.FETCH_CHARACTER_FILMS_SUCCESS:
      return {
        ...state,
        selectedCharacterFilms: action.payload.films,
      };
    default:
      return state;
  }
};

export default filmsReducer;
