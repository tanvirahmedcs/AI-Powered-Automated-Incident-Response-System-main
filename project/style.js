// Initialize the threat visualization chart
const ctx = document.getElementById('threatChart').getContext('2d');
const threatChart = new Chart(ctx, {
    type: 'bar', // Example chart type
    data: {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [{
            label: 'Threat Levels',
            data: [12, 19, 7, 5], // Example data
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Threat Levels Overview'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});