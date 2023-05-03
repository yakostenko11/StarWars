import { Resource, ResourceId } from "../types";

export interface Film extends Resource {
  title: string;
  releaseDate: Date;
  openingCrawl: string;
}

export interface FilmsState {
  readonly films: Film[];
  readonly selectedCharacterFilms: Film[];
  readonly loading: boolean;
  readonly error: string | null;
}

export enum FilmActionTypes {
  FETCH_FILMS = "@@films/FETCH_FILMS",
  FETCH_FILMS_SUCCESS = "@@films/FETCH_FILMS_SUCCESS",
  FETCH_FILMS_ERROR = "@@films/FETCH_FILMS_ERROR",
  FETCH_CHARACTER_FILMS_SUCCESS = "@@films/FETCH_CHARACTER_FILMS_SUCCESS",
}

export interface FetchFilmsAction {
  type: FilmActionTypes.FETCH_FILMS;
  payload: {
    filmIds: ResourceId[];
  };
}
export interface FetchFilmsSuccessAction {
  type: FilmActionTypes.FETCH_FILMS_SUCCESS;
  payload: {
    films: Film[];
  };
}

export interface FetchFilmsErrorAction {
  type: FilmActionTypes.FETCH_FILMS_ERROR;
  payload: {
    error: string;
  };
}

export interface FetchCharacterFilmsSuccessAction {
  type: FilmActionTypes.FETCH_CHARACTER_FILMS_SUCCESS;
  payload: {
    films: Film[];
  };
}

export type FilmActions =
  | FetchFilmsAction
  | FetchFilmsSuccessAction
  | FetchFilmsErrorAction
  | FetchCharacterFilmsSuccessAction;
