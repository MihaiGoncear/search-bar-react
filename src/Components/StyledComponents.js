import styled from '@emotion/styled';

export const SearchBar = styled.input`
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 8px 8px 0 0 ;
    border: 1px solid black;
    height: 3vw;
    width: 21vw;
    font-size: 1.3vw;
`

export const FilteredNames = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
`
    
export const Name = styled.p`
    height: 100%;
    width: 21vw;
    padding: 1% 1% 1% 20px;
    border-width: 0 1px 1px 1px;
    border-color: black;
    border-style: solid;
    font-size: 1.4vw;
`

export const SearchImage = styled.img`
    width: 100%;
    margin-top: 20px;
`