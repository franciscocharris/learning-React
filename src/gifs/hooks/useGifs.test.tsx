import { afterEach, describe, expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useGifs } from "./useGifs";
import * as GifActions from "../actions/get-gifs-by-query.action";

describe('useGifs', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });
    test('should return default values and methods', () => {
        const { result: { current } } = renderHook(() => useGifs());

        expect(current.gifs).toStrictEqual([]);
        expect(current.previousTerms).toStrictEqual([]);
        expect(current.handleSearch).toBeDefined();
        expect(current.handleTermClicked).toBeDefined();
    });

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('goku');
        });

        expect(result.current.gifs.length).toBe(10);

        // result.current.gifs.map((gif) => {
        //     expect(gif).toStrictEqual({
        //         id: expect.any(String)
        //     });
        // });
    });

    test('should return a list of gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());
        const term = 'goku';
        await act(async () => {
            await result.current.handleTermClicked(term);
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(GifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('an error test'));

        await act(async () => {
            await result.current.handleTermClicked('goku');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());

        for (let index = 0; index <= 9; index++) {
            await act(async () => {
                await result.current.handleSearch(`goku${index}`);
            });
        }

        expect(result.current.previousTerms).toStrictEqual(
            [
                'goku9', 'goku8',
                'goku7', 'goku6',
                'goku5', 'goku4',
                'goku3', 'goku2'
            ]
        );
        expect(result.current.previousTerms.length).toBe(8);
    });
});