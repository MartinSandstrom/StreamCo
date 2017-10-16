/*

    Since the data is mocked in the application, we can use it for the test.
    As soon as the data is fetched, the call should be mocked and
    the test should use testdata.

*/

import dataService from '../app/dataService.js';

describe('dataService', () => {
    test('can filter out the series', () => {
        let series = dataService.getData('series', 1337, 2010);
        expect(series.every((serie) =>  serie.programType === 'series')).toBe(true);
    });
    test('can filter out the movies', () => {
        let movies = dataService.getData('movie', 1337, 2010);
        expect(movies.length > 0 && movies.every((movie) =>  movie.programType === 'movie')).toBe(true);
    });
    test('can filter out the correct amount for movies', () => {
        let movies = dataService.getData('movie', 21, 2010);
        expect(movies.length).toBe(21);
    });
    test('can filter out the correct amount for series', () => {
        let movies = dataService.getData('series', 14, 2010);
        expect(movies.length).toBe(14);
    });
    test('sort out movies by release date', () => {
        let movies = dataService.getData('movie', 21, 2009);
        expect(movies.length > 0 && movies.every((movie) =>  movie.releaseYear >= 2009)).toBe(true);
    });
    //TODO
    //Add test to see if its sorted correctly maybe?
});
