import { PagedData } from "../types";
import {
  Character,
  CharacterActionTypes,
  FetchCharactersAction,
  FetchCharactersErrorAction,
  FetchCharactersSuccessAction,
  SelectCharacterAction,
} from "./types";

export function fetchCharacters(
  searchValue: string,
  page: number
): FetchCharactersAction {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS,
    payload: { searchValue, page },
  };
}

export function fetchCharactersSuccess(
  characters: PagedData<Character>
): FetchCharactersSuccessAction {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
    payload: { characters },
  };
}

export function fetchCharactersError(
  error: string
): FetchCharactersErrorAction {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
    payload: { error },
  };
}

export function selectCharacter(
  character: Character | null
): SelectCharacterAction {
  return {
    type: CharacterActionTypes.SELECT_CHARACTER,
    payload: { character },
  };
}
