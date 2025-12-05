import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
    test('should render correctly', () => {
        const { container } = render(<SearchBar onQuery={() => { }} />);

        expect(container).toMatchSnapshot();
    });

    test('should call onQuery with the correct value after 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'text' } });

        // await new Promise((resolve) => setTimeout(resolve, 701));
        waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('text');
        });
    });

    test('should call only with the last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const textInput = screen.getByRole('textbox');
        fireEvent.change(textInput, { target: { value: 't' } });
        fireEvent.change(textInput, { target: { value: 'te' } });
        fireEvent.change(textInput, { target: { value: 'tes' } });
        fireEvent.change(textInput, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call onQuery when button is clicked', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledWith('test');
        expect(onQuery).toHaveBeenCalledTimes(1);
    });

    test('should the input has the correct placeholder value', () => {
        const value = 'buscar';
        render(<SearchBar placeholder={value} onQuery={() => { }} />);

        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });
});