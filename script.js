function createChart(id, config) {
    const el = document.getElementById(id);

    if (!el) {
        console.warn(`Canvas niet gevonden: ${id}`);
        return;
    }

    return new Chart(el, config);
}


createChart('weekChart', {
    type: 'bar',
    data: {
        labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        datasets: [{
            data: [2530, 3200, 5100, 7800, 4200, 6400, 3900],
            backgroundColor: '#8efb2a',
            borderRadius: 4,
            borderSkipped: false,
            barThickness: 14,
            maxBarThickness: 18
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#777' } },
            y: { grid: { color: '#2a2a2a' }, ticks: { color: '#777' } }
        }
    }
});


createChart('weightChart', {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [73, 71, 70.5, 69.8, 69.4, 68.3],
            borderColor: '#8EF230',
            borderWidth: 2,
            pointRadius: 1.5,
            tension: 0.3,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#cfcfcf' } },
            y: { grid: { color: 'rgba(255,255,255,0.15)' }, ticks: { color: '#cfcfcf' } }
        }
    }
});


createChart('trainingChart', {
    type: 'bar',
    data: {
        labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        datasets: [{
            data: [0, 1.5, 1.5, 0, 0, 0, 0],
            backgroundColor: '#8EF230',
            borderRadius: 4,
            borderSkipped: false,
            barThickness: 18
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#6f6f6f' } },
            y: {
                min: 0,
                max: 2.5,
                ticks: {
                    stepSize: 0.5,
                    color: '#6f6f6f',
                    callback: v => v + 'u'
                },
                grid: { color: 'rgba(255,255,255,0.15)' }
            }
        }
    }
});


const spark = {
    type: 'line',
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        elements: {
            point: { radius: 0 },
            line: { borderWidth: 2 }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
};


createChart('gewichtChart', {
    ...spark,
    data: {
        labels: [1,2,3,4,5,6],
        datasets: [{
            data: [73,72.5,72,71,70,70.4],
            borderColor: '#8EF230'
        }]
    }
});


createChart('vetChart', {
    ...spark,
    data: {
        labels: [1,2,3,4,5,6],
        datasets: [{
            data: [14.2,13.8,13.3,12.4,13.0,12.6],
            borderColor: '#8EF230'
        }]
    }
});


createChart('bmiChart', {
    ...spark,
    data: {
        labels: [1,2,3,4,5,6],
        datasets: [{
            data: [21.3,21.8,21.7,21.1,21.9,21.7],
            borderColor: '#8EF230'
        }]
    }
});


createChart('hartslagChart', {
    ...spark,
    data: {
        labels: [1,2,3,4,5,6,7,8],
        datasets: [{
            data: [62,65,62,65,62,68,60,63],
            borderColor: '#8EF230'
        }]
    }
});

