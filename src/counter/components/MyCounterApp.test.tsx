import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);
        // screen.debug();
        expect(
            screen.getByRole('heading', { level: 1 }).innerHTML
        ).toContain(`counter: 5`);
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });

    test('should increment the counter', () => {
        render(<MyCounterApp />);
        const labelH1 = screen.getByRole('heading', { level: 1 });
        const buttonAdd = screen.getByRole('button', { name: '+1' });

        fireEvent.click(buttonAdd);

        expect(labelH1.innerHTML).toContain(`counter: 6`);
    });

    test('should decrement the counter', () => { 
        render(<MyCounterApp/>);
        const labelH1 = screen.getByRole('heading', {level: 1});
        const buttonSubtract = screen.getByRole('button', {name: '-1'});

        fireEvent.click(buttonSubtract);

        expect(labelH1.innerHTML).toContain('counter: 4');
     });

     test('should Reset the Counter', () => { 
        render(<MyCounterApp/>);
        const labelH1 = screen.getByRole('heading', {level: 1});
        const buttonReset = screen.getByRole('button', {name: 'Reset'});

        fireEvent.click(buttonReset);

        expect(labelH1.innerHTML).toBe('counter: 5');
      });
});