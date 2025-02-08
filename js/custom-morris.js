/*$(document).ready(function () {
  // Define the piechart data
    const chartData = [
        { label: "Starting Amount", value: 40 },
        { label: "Total Contributions", value: 35 },
        { label: "Interest", value: 25 }
    ];

    // Generate the Donut piechart
    donutChartData = Morris.Donut({
        element: 'donutMorris',
        data: chartData,
        colors: ['#007bff', '#28a745', '#ffc107'],
        resize: true,
        formatter: function (x) { return x + "%"; } // Show percentage in tooltip
    });

    // Add values dynamically to the chart
    const chartElement = $('#donutMorris');
    const totalValue = chartData.reduce((acc, item) => acc + item.value, 0);

    // Position and display labels
    chartData.forEach((item, index) => {
        const angle = (index + 0.5) * (360 / chartData.length); // Calculate angle
        const radians = (angle - 90) * (Math.PI / 180); // Convert to radians
        const x = 125 + 100 * Math.cos(radians); // Adjust based on chart size
        const y = 125 + 100 * Math.sin(radians); // Adjust based on chart size

    });

});
*/


/*
if (savedDonutChartData) {
        try {
            const parsedDonutChartData = JSON.parse(savedDonutChartData);
    
            if (
                parsedDonutChartData &&
                parsedDonutChartData.labels &&
                Array.isArray(parsedDonutChartData.datasets) &&
                parsedDonutChartData.datasets[0].data
            ) {
                const piectx = document.getElementById('donutMorris').getContext('2d');
    
                const pieChart = new Chart(piectx, {
                    type: 'doughnut',
                    data: parsedDonutChartData,
                    options: {
                        responsive: false,
                        cutout: '60%',
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                callbacks: {
                                    label: function (tooltipItem) {
                                        const value = tooltipItem.raw;
                                        return `${value.toFixed(2)}%`;
                                    }
                                }
                            }
                        }
                    }
                });
            } else {
                console.error('Invalid data format in savedDonutChartData:', parsedDonutChartData);
            }
        } catch (e) {
            console.error('Error parsing savedDonutChartData:', e, savedDonutChartData);
        }
    } else {
        console.log('No savedDonutChartData found in localStorage.');
    */