import React from 'react';
import { FilteredNames, Name, SearchImage } from './StyledComponents'

export function SearchResult(props) {

    return (
        <FilteredNames>
            {
                props.InputValue.length > 0 && props.InputValue !== 'home'

                    ? props.NameArray.filter(name => {
                        return name.toLowerCase().match(props.InputValue.toLowerCase())
                    }).map((name, index) => <Name onClick={props.ChooseName} key={index}>{name}</Name> 
                        )
                    : <SearchImage src="https://www.brafton.com/wp-content/uploads/2013/03/shutterstock_123304099-350x245.jpg" alt="search" />
            }
        </FilteredNames>
    )
}