// charts
let ctx = document.getElementById('montlySales').getContext('2d')
let pieCtx = document.getElementById('deptSales').getContext('2d')

// bar chart
let montlySalesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Sales',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      bordarWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})

// circle chart
let deptSalesChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Sales',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      bordarWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})