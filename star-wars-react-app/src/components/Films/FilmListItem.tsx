import React from 'react';

import { Film } from '../../state/films';

import { trauncateText } from '../../utils/text';

type Props = {
    film: Film,
}

const TRUCANTE_CHARS_COUNT = 130

const FilmListItem = ({ film }: Props) => {
    const { title, releaseDate, openingCrawl } = film

    return (
        <li>
            <h3>{title}</h3>
            <p>{releaseDate.toLocaleDateString()}</p>
            <p>{trauncateText(openingCrawl, TRUCANTE_CHARS_COUNT)}</p>
        </li>
    )
}

export default FilmListItem