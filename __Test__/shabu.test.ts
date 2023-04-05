import MockAdapter from "axios-mock-adapter/types";
import axios from "axios";
import { calShabuPrice } from "../shabu";

describe('calcurate shabu price', () => {
    const mock = new MockAdapter(axios);
    test.each(
        [
           {num: 1, expectedResult: 374},
           {num: 2, expectedResult: 748},
           {num: 3, expectedResult: 1122},
           {num: 4, expectedResult: 1122},
           {num: 5, expectedResult: 1870},
           {num: 6, expectedResult: 2244},
           {num: 7, expectedResult: 2618},
           {num: 8, expectedResult: 2244},
        ]
    )("Should be true", async ({num, expectedResult}) => {
        mock.onGet('cal-shabu-price').reply(200);
        expect(calShabuPrice(num)).toBe(expectedResult);
    })
});