import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Purebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });
    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot( );

    });
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value }});

        expect (wrapper.find( 'p' ).text().trim() ).toBe( value );
    });

    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    /**
     * TAREA
     * debe de llamar el setCategories y limpiar la caja de texto
     * 1. Simular el inputChange
     * 2. Simular el submit
     * 3. setCategories se debe haber llamado 
     * 4. El valor del input de ser ''
     */
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target:{ value }});
        
        // 2.Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}});

        // 3. setCategories se debe haber llamado 
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        // 4. El valor del input de ser ''
        expect( wrapper.find( 'input').prop('value') ).toBe('');
        
    });
    
    
})
