class H1bAggregate {
    
    constructor(count, avgSalary, year) {
        this.count = count;
        this.avgSalary = avgSalary;
        this.year = year;
    }
}

class H1bTitleAggregate {
    
    constructor(count, avgSalary, title) {
        this.count = count;
        this.avgSalary = avgSalary;
        this.title = title;
    }
}

module.exports = {
    H1bAggregate,
    H1bTitleAggregate
}