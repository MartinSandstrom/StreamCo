import data from './data.json';

const DataService = {
    getData: (type, numberOfEntriesToReturn, minReleaseYear) => {
        let byType = data.entries.filter((entry) => entry.programType === type && entry.releaseYear >= minReleaseYear);
        byType.sort((a, b) => {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });
        return byType.slice(0, numberOfEntriesToReturn);
    }
};

export default DataService;
