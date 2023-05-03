import React from 'react';

import { Character } from '../../state/characters';

import { StyledCharactersListItem } from './CharactersListItem.styled';

type Props = {
    character: Character,
    onClick: (character: Character) => void;
}

const CharacterListItem = ({ character, onClick }: Props) => {
    const { name, population } = character.homeworld

    return (
        <StyledCharactersListItem onClick={() => onClick(character)}>
            <h3>{character.name}</h3>
            <p>Homeworld: {name}, Population: {population}</p>
        </StyledCharactersListItem>
    )
}

export default CharacterListItem