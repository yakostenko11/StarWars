import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";

import { AppState } from "..";
import { starWarsApi } from "../../services/starWarsApi";
import { ResourceId } from "../types";
import {
  fetchCharacterFilmsSuccess,
  fetchFilmsError,
  fetchFilmsSuccess,
} from "./actions";
import { FetchFilmsAction, Film, FilmActionTypes } from "./types";

const findFilm = (filmId: ResourceId, films: Film[]) => {
  return films.find(film => film.id === filmId);
};

const selectFilms = (state: AppState) => state.films.films;

function* handleFilmsFetch(action: FetchFilmsAction) {
  const { filmIds } = action.payload;
  const characterFilms: Film[] = [];
  const filmIdsToFetch: ResourceId[] = [];
  const films: Film[] = yield select(selectFilms);

  filmIds.forEach(filmId => {
    const foundFilm = findFilm(filmId, films);

    if (foundFilm) {
      characterFilms.push(foundFilm);
    } else {
      filmIdsToFetch.push(filmId);
    }
  });

  try {
    const result: Film[] = yield all(
      filmIdsToFetch.map(filmId =>
        call([starWarsApi, starWarsApi.fetchFilm], filmId)
      )
    );

    characterFilms.push(...result);

    yield put(fetchFilmsSuccess(result));
    yield put(fetchCharacterFilmsSuccess(characterFilms));
  } catch (error) {
    yield put(fetchFilmsError(error.message));
  }
}

function* watchFetchFilms(): Generator {
  yield takeLatest(FilmActionTypes.FETCH_FILMS, handleFilmsFetch);
}

export function* filmsSaga() {
  yield all([fork(watchFetchFilms)]);
}
