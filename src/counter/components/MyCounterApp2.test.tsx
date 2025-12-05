import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 22,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    }),
}));

beforeEach(() => {
    render(<MyCounterApp />);
});

describe('MyCounterApp with mock', () => {
    test('should render the component', () => {
        const { container } = render(<MyCounterApp />);
        expect(container).toMatchSnapshot();
    });

    test('should call handleAdd when is clicked', () => {
        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);
        expect(handleAddMock).toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
    });

    test('should call handleSubtract when is clicked', () => {
        const button = screen.getByRole('button', {name: '-1'});
        fireEvent.click(button);
        expect(handleSubtractMock).toHaveBeenCalled();
    });
    
    test('should call handleReset when is clicked', () => {
        const button = screen.getByRole('button', {name: 'Reset'});
        fireEvent.click(button);
        expect(handleResetMock).toHaveBeenCalled();
    });
});