import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    // let result;

    // beforeEach(() => {
    //     const { result:hookValue } = renderHook(() => useCounter());
    //     result = hookValue;
    // });

    test('should initialize with value 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    });

    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleAdd();
        });
        expect(result.current.counter).toBe(11);
    });

    test('should substract counter when subtract is called', () => {
        const { result } = renderHook(() => useCounter(12));
        act(() => {
            result.current.handleSubtract();
        });

        expect(result.current.counter).toBe(11);
    });

    test('should reset the value when handleReset is called', () => {
        const { result } = renderHook(() => useCounter(10));
        act(() => {
            result.current.handleAdd();
        })
        act(() => {
            result.current.handleAdd();
        })
        act(() => {
            result.current.handleReset();
        });

        expect(result.current.counter).toBe(5);
    });
});