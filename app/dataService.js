import data from './data.json';

const DataService = {
    getData: (type) => data.entries.filter((entry) => entry.programType === type)
}

export default DataService;
