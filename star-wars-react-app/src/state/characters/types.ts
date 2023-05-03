import { Planet } from "../planets";
import { PagedData, Resource, ResourceId } from "../types";

export interface Character extends Resource {
  name: string;
  homeworld: Planet;
  filmIds: ResourceId[];
}

export interface CharactersState {
  readonly characters: PagedData<Character>;
  readonly selectedCharacter: Character | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly page: number;
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = "@@characters/FETCH_CHARACTERS",
  FETCH_CHARACTERS_SUCCESS = "@@characters/FETCH_CHARACTERS_SUCCESS",
  FETCH_CHARACTERS_ERROR = "@@characters/FETCH_CHARACTERS_ERROR",
  SELECT_CHARACTER = "@@characters/SELECT_CHARACTER",
}

export interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS;
  payload: {
    searchValue: string;
    page: number;
  };
}

export interface FetchCharactersSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: {
    characters: PagedData<Character>;
  };
}

export interface FetchCharactersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: {
    error: string;
  };
}

export interface SelectCharacterAction {
  type: CharacterActionTypes.SELECT_CHARACTER;
  payload: {
    character: Character | null;
  };
}

export type CharacterActions =
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersErrorAction
  | SelectCharacterAction;
