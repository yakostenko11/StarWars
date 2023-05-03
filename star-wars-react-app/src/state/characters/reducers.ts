import {
  CharacterActions,
  CharacterActionTypes,
  CharactersState,
} from "./types";

const initialCharactersState: CharactersState = {
  characters: {
    count: 0,
    hasMoreData: false,
    data: [],
  },
  selectedCharacter: null,
  loading: false,
  error: null,
  page: 1,
};

const charactersReducer = (
  state: CharactersState = initialCharactersState,
  action: CharacterActions
): CharactersState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
        error: null,
        characters:
          action.payload.page === 1
            ? { ...state.characters, data: [] }
            : state.characters,
      };
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      const { characters } = action.payload;
      const nextPage = characters.hasMoreData ? state.page + 1 : 1;

      return {
        ...state,
        loading: false,
        page: nextPage,
        characters: {
          count: characters.count,
          hasMoreData: characters.hasMoreData,
          data: [...state.characters.data, ...characters.data],
        },
      };
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CharacterActionTypes.SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload.character,
      };
    default:
      return state;
  }
};

export default charactersReducer;
