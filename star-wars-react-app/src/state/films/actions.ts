import { ResourceId } from "../types";
import {
  FetchCharacterFilmsSuccessAction,
  FetchFilmsAction,
  FetchFilmsErrorAction,
  FetchFilmsSuccessAction,
  Film,
  FilmActionTypes,
} from "./types";

export function fetchFilms(filmIds: ResourceId[]): FetchFilmsAction {
  return {
    type: FilmActionTypes.FETCH_FILMS,
    payload: { filmIds },
  };
}

export function fetchFilmsSuccess(films: Film[]): FetchFilmsSuccessAction {
  return {
    type: FilmActionTypes.FETCH_FILMS_SUCCESS,
    payload: { films },
  };
}

export function fetchFilmsError(error: string): FetchFilmsErrorAction {
  return {
    type: FilmActionTypes.FETCH_FILMS_ERROR,
    payload: { error },
  };
}

export function fetchCharacterFilmsSuccess(
  films: Film[]
): FetchCharacterFilmsSuccessAction {
  return {
    type: FilmActionTypes.FETCH_CHARACTER_FILMS_SUCCESS,
    payload: { films },
  };
}
