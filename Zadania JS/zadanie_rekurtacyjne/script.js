const expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
};

function get_median_of_first_week_expenses(expenses) {
    let medianExpenses = [];

    
    for (const year in expenses) {
        
        for (const month in expenses[year]) {
            let firstWeekExpenses = [];
            const days = Object.keys(expenses[year][month]);
            const firstWeekDays = days.slice(0, 7);

            
            firstWeekDays.forEach(day => {
                if (expenses[year][month][day]) {
                    const categories = Object.keys(expenses[year][month][day]);
                    categories.forEach(category => {
                        firstWeekExpenses.push(expenses[year][month][day][category]);
                    });
                }
            });

            
            firstWeekExpenses.sort((a, b) => a - b);
            const n = firstWeekExpenses.length;
            const median = n % 2 === 0 ? (firstWeekExpenses[n / 2 - 1] + firstWeekExpenses[n / 2]) / 2 : firstWeekExpenses[Math.floor(n / 2)];
            medianExpenses.push(median);
        }
    }

    
    medianExpenses.sort((a, b) => a - b);
    const totalN = medianExpenses.length;
    const totalMedian = totalN % 2 === 0 ? (medianExpenses[totalN / 2 - 1] + medianExpenses[totalN / 2]) / 2 : medianExpenses[Math.floor(totalN / 2)];

    return totalMedian;
}

const result = get_median_of_first_week_expenses(expenses);
console.log(result);