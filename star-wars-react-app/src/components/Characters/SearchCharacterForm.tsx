import React, { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../Button';
import { FormTitle } from '../Form/FormTitle.styled';
import Input from '../Input';
import { StyledForm } from '../Form/Form.styled';
import { StyledFormGroup } from '../Form/FormGroup.styled';

type Props = {
    searchCharacter: (searchValue: string) => void
}

const SearchCharacterForm = ({ searchCharacter }: Props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault()

        searchCharacter(searchValue)
    }

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <FormTitle>Search Your Favorite Characters</FormTitle>
            <StyledFormGroup>
            <Input
                type="text"
                name="search"
                placeholder="Search a character"
                onChange={handleSearchValueChange}
            />
            </StyledFormGroup>
            <Button>Search</Button>
        </StyledForm>
    )
}

export default SearchCharacterForm