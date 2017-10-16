import data from './data.json';

const DataService = {
    getData: (type, numberOfEntriesToReturn, minReleaseYear) => {
        let byType = data.entries.filter((entry) => entry.programType === type && entry.releaseYear >= minReleaseYear);
        byType.sort((a, b) => b.releaseYear - a.releaseYear);
        return byType.slice(0, numberOfEntriesToReturn);
    }
};

export default DataService;
