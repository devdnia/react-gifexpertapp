import React, { useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue( e.target.value );

    };

    const handleSubmit = (e) =>{

        // Para prevenir el refresco por defecto del formulario
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            
            setCategories( cats => [inputValue, ...cats ] );
            setInputValue('');

        }

    };


    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
           <input 
                type="text"
                value= { inputValue }
                onChange={ handleInputChange }
           />
        </form>
    )
}


AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
