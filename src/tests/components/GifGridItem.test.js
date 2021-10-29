import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


/**
 *  PRUEBAS:
 * 
 *  Prueba 1:
 *  1. Instalar Enzyme
 *  2. Instalar Enzyme to Json
 *  3. debe mostrar el componente correctamente
 *      * shallow
 *      * wrapper
 *      * wrapper .toMatchSnapshot()
 * 
 *  Prueba 2:
 *  1. Añadir PropTypes
 *     url, tittle = Obligatorios
 *  2. Enviar title y url a la hora de utilizar shallow()
 *  3. Actualizar su snapshot con los cambios
 */



describe('Prueba en GifGridItem', () => {

    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } />);

    test('debe mostrar el componente correctamente (hacer el match con el snapshot )', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });
    
    test('debe de tener la imagen igual a la url y alt de los props', () => {
       const img = wrapper.find( 'img');
       expect( img.prop( 'src' ) ).toBe( url ); 
       expect( img.prop( 'alt' ) ).toBe( title ); 
    });

    test('debe de tener animate__fadeIn', () => {
       const div = wrapper.find( 'div' );
       // console.log( div.prop( 'className') );
       const className = div.prop( 'className');
       expect( className.includes( 'animate__fadeIn') ).toBe( true );

    });
    
    
    
})
