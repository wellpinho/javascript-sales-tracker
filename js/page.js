// charts
let ctx = document.getElementById('montlySales').getContext('2d')
let pieCtx = document.getElementById('deptSales').getContext('2d')

let montlyLabels = Array.of('Oct', 'Nov', 'Dec')
let montlySales = Array.of(12, 9, 3)

let deptLabels = Array.of('Oct', 'Nov', 'Dec')
let dptSales = Array.of(12, 9, 3)

// bar chart
let montlySalesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: montlyLabels,
    datasets: [{
      label: '# of Sales',
      data: montlySales,
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
    labels: deptLabels,
    datasets: [{
      label: '# of Sales',
      data: dptSales,
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