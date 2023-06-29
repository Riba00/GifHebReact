import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';

 describe('Pruebas en <GifExpertApp />', () => {

    test('no debe de permitir añadir categorias repetidas', () => {
        
        const inputValue = 'DragonBall';
        const onAddCategory = jest.fn();
        render( <GifExpertApp onAddCategory={ onAddCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getAllByText('DragonBall').length ).toBe(1);  

    });

 });