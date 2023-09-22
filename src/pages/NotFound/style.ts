import { styled } from 'styled-components'
import { color } from '../../styles/theme'

export const FlexContainer = styled.div`
    width: 100%;
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: ${color.Black.Text};
    text-align: center;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
`

export const Description = styled.p`
    font-size: 24px;
    font-weight: 500;
`