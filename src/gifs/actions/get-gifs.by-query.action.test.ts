import { describe, expect, test } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';

import { giphyApi } from "../api/giphy.api";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyResponseData } from '../../../tests/mock/giphyResponseData.response'

describe('get-gifs-by-query', () => {

    const mock = new AxiosMockAdapter(giphyApi);

    // test('should return a gif list', async () => { 
    //     const gifs = await getGifsByQuery('goku');
    //     const [gif1] = gifs;

    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //     });
    //  });
    test('should return a lists of gifs', async () => {
        mock.onGet('/search').reply(200, giphyResponseData)
        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(10);
        gifs.forEach((gif) => {
            expect(gif).toStrictEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
                width: expect.any(Number),
                height: expect.any(Number),
            });
        })
    });

    test('should return a empty list of gifs when query is empty', async () => {
        mock.restore();
        const gifs = await getGifsByQuery('');

        mock.onGet('/search').reply(200, AxiosMockAdapter);

        expect(gifs.length).toBe(0);
    });

    // test('should return an exception', async () => {
    //     mock.restore();
    //     const consoleErrorSpy = vi.spyOn(console, 'error')
    //         .mockImplementation(() => {});

    //     mock.onGet('/search').reply(400, {
    //         data: {
    //             response: 'bad Request'
    //         },
    //     });


    //     const gifs = await getGifsByQuery('goku');

    //     expect(gifs.length).toBe(0);
    //     expect(consoleErrorSpy).toHaveBeenCalled();
    //     expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything())
    // })
});