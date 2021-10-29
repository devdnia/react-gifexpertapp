import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs Fetch', () => {
    
    test('debe de devolver 10 elementos', async () => {
       
        const gifs = await getGifs( 'Goku');

        expect( gifs.length ).toBe( 10 );
    });

    test('debe de devolver 0 elementos si no hay categoria', async () => {
       
        const gifs = await getGifs( '');
    
        expect( gifs.length ).toBe( 0 );
    });
    
})
