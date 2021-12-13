// charts
let ctx = document.getElementById('montlySales').getContext('2d')
let pieCtx = document.getElementById('deptSales').getContext('2d')
let yearTotalLabel = document.getElementById('yearlyTotal')

let montlyLabels = Array.of('Oct', 'Nov', 'Dec')
let montlySales = Array.of(500, 9000, 3000, 400)

let deptLabels = Array.of('Hiking', 'Running', 'Hunting')
let dptSales = Array.of(12, 9, 3)

let yearlyTotal = 0

function addYearlyTotal(x) {
  yearlyTotal = x + yearlyTotal
}
montlySales.forEach(addYearlyTotal)

let octNums = Array.of(500, 1000, 9000)
let novNums = Array.of(1100, 2000, 9000)
let decNums = Array.of(4000, 1000, 5000)

// 1200,1000,9000,1100,2000,9000,4000,1000,5000
// let total = Array.of(
//   addYearlyTotal(...octNums),
//   addYearlyTotal(...novNums),
//   addYearlyTotal(...decNums)
// )
// alert(addYearlyTotal(...total))

// spread operator
// let yearlyTotal = addYearlyTotal(...montlySales)
yearTotalLabel.innerHTML = "$" + yearlyTotal

function findOver1000() {
  // find retorna o primeiro que ele encontrar que satisfaça a busca
  // findIndex retorna a posição do primeiro que satisfaz a busca
  let firstThousand = montlySales.findIndex(element => element > 1000)
  alert(firstThousand)
}

// reset to zero all chart bars
function resetNumbers() {
  montlySales.fill(0)
  montlySalesChart.update()
}

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