import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import { starWarsApi } from "../../services/starWarsApi";
import { PagedData } from "../types";
import { fetchCharactersError, fetchCharactersSuccess } from "./actions";
import {
  Character,
  CharacterActionTypes,
  FetchCharactersAction,
} from "./types";

function* handleCharactersFetch(action: FetchCharactersAction) {
  const { searchValue, page } = action.payload;

  try {
    const result: PagedData<Character> = yield call(
      [starWarsApi, starWarsApi.fetchCharacters],
      searchValue,
      page
    );

    yield put(fetchCharactersSuccess(result));
  } catch (error) {
    yield put(fetchCharactersError(error.message));
  }
}

function* watchFetchCharacters(): Generator {
  yield takeLatest(
    CharacterActionTypes.FETCH_CHARACTERS,
    handleCharactersFetch
  );
}

export function* charactersSaga() {
  yield all([fork(watchFetchCharacters)]);
}
