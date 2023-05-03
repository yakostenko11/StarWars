import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilmsList from '../components/Films/FilmsList';
import { StyledErrorMessage } from '../components/ErrorMessage/ErrorMessage.styled';
import Text from '../components/Text';
import ThemedLoader from '../components/ThemedLoader/ThemedLoader';

import { AppState } from '../state';
import { Character } from '../state/characters';
import { fetchFilms } from '../state/films';


type Props = {
    character: Character
}

const CharacterDetailsContainer = ({ character }: Props) => {
    const { selectedCharacterFilms, loading, error } = useSelector((state: AppState) => state.films)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms(character.filmIds))
    }, [character.filmIds, dispatch])

    const showNoFilmsInfo = () => {
        return !loading && !error && selectedCharacterFilms.length === 0
    }

    const showError = () => {
        return !loading && error
    }

    return (
        <>
            <h2>List of movies in which {character.name} appeared</h2>

            {loading && (
                <ThemedLoader />
            )}

            {!loading && <FilmsList films={selectedCharacterFilms} />}
            {showNoFilmsInfo() && <Text>No films found.</Text>}
            {showError() && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </>
    )
}

export default CharacterDetailsContainer