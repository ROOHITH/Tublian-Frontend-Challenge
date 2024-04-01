const BarGraphViewModel = () => {
    const engagementRates = {
        Monday: 80,
        Tuesday: 85,
        Wednesday: 75,
        Thursday: 90,
        Friday: 95,
        Saturday: 85,
        Sunday: 70
    };
    const abbreviatedLabels = Object.keys(engagementRates).map(day => day.substring(0, 3));
    const getChartData = () => {
      
        return {
            labels:abbreviatedLabels,
            datasets: [{
                // label: 'Engagement Rate',
                // backgroundColor: 'rgba(54, 162, 235, 0.6)',
                // borderColor: 'rgba(54, 162, 235, 1)',
                // borderWidth: 0,
                data: Object.values(engagementRates)
            }]
        };
    };

    return { engagementRates, getChartData , fullDayLabels: Object.keys(engagementRates) };
};

export default BarGraphViewModel;
