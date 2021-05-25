import styled from '@emotion/styled';

export const SearchBar = styled.input`
    padding-left: 20px;
    border-radius: 8px 0 0 0 ;
    border: 1px solid black;
    height: 3vw;
    width: 19vw;
    font-size: 1.3vw;
`

export const SubmitButton = styled.div`
    width: 3vw;
    height: 3vw;
    border-width: 1px 1px 1px 0;
    border-color: black;
    border-style: solid;
    border-radius: 0 8px 0 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: rgb(220, 220, 220);
      }
`

export const FilteredNames = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
`
    
export const Name = styled.p`
    height: 100%;
    width: 22vw;
    padding: 1% 1% 1% 20px;
    border-width: 0 1px 1px 1px;
    border-color: black;
    border-style: solid;
    font-size: 1.4vw;
    cursor: pointer;
    &:hover {
        background-color: rgb(220, 220, 220);
    }
`

export const SearchImage = styled.img`
    width: 100%;
    margin-top: 20px;
`