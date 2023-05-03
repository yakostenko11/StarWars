import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components'

const ThemedLoader = () => {
    const themeContext = useContext(ThemeContext)

    return (
    <Loader
        type="Oval"
        color={themeContext.accentColor}
        height={40}
        width={40}
    />)
}

export default ThemedLoader