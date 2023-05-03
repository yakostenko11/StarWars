import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../state/index';
import { Character, fetchCharacters, selectCharacter } from '../state/characters';

import Button from '../components/Button';
import CharacterDetailsContainer from './CharacterDetailsContainer';
import CharactersList from '../components/Characters/CharactersList';
import Modal from '../components/Modal/Modal';
import SearchCharacterForm from '../components/Characters/SearchCharacterForm';
import { StyledErrorMessage } from '../components/ErrorMessage/ErrorMessage.styled';
import Text from '../components/Text';
import ThemedLoader from '../components/ThemedLoader/ThemedLoader';

const CharactersListContainer = () => {
    const { characters, selectedCharacter, loading, page, error } = useSelector((state: AppState) => state.characters)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState<string | null>(null)

    const onSearchCharacter = useCallback((value: string) => {
        setSearchValue(value)
        dispatch(fetchCharacters(value, 1))
    }, [dispatch])

    const handleLoadMoreCharacters = () => {
        if (searchValue !== null) {
            dispatch(fetchCharacters(searchValue, page))
        }
    }

    const showLoadMoreCharactersButton = () => {
        return !loading && characters.hasMoreData
    }

    const showNoCharactersInfo = () => {
        return !loading && !error && characters.data.length === 0 && searchValue !== null
    }

    const handleCharacterSelect = (character: Character) => {
        dispatch(selectCharacter(character))
    }

    const showError = () => {
        return !loading && error
    }

    const closeModal = () => {
        dispatch(selectCharacter(null))
    }

    return (
        <>
            <SearchCharacterForm searchCharacter={onSearchCharacter} />
            <CharactersList characters={characters.data} onCharacterSelect={handleCharacterSelect} />
            {showLoadMoreCharactersButton() && <Button onClick={handleLoadMoreCharacters}>Load more characters</Button>}
            {loading && (
                <ThemedLoader />
            )}
            {showNoCharactersInfo() && <Text>No characters found.</Text>}
            {showError() && <StyledErrorMessage>{error}</StyledErrorMessage>}

            <Modal isOpen={selectedCharacter !== null} onClose={closeModal}>
                {selectedCharacter !== null && <CharacterDetailsContainer character={selectedCharacter} />}
            </Modal>
        </>
    )
}

export default CharactersListContainer