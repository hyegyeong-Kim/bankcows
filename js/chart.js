new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["2015", "2021"],
    datasets: [
      {
        backgroundColor: ["rgb(142, 176, 255)", "rgb(142, 176, 255)"],
        data: [144, 250]
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize : 14,
        }
      }]
    },
    legend: { display: false },
   
  }
});

new Chart(document.getElementById("oecd-chart"), {
  type: 'bar',
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["rgb(142, 176, 255)","rgb(142, 176, 255)","rgb(142, 176, 255)","rgb(142, 176, 255)","rgb(142, 176, 255)"],
        data: [98,105,111,150,114]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize : 14,
        }
      }]
    },
    legend: { display: false },
    
  }
});

  new Chart(document.getElementById('toggle_chart'), {
    type: 'line',
    data: {
      labels: ['2011년', '2012년', '2013년', '2014년', '2015년', '2016년', '2017년', '2018년', '2019년', "2020년", "2021년"],
      datasets: [{
        label: '한우 사육두수',
        data: [2819674, 2819676, 2819679, 281967, 2819671, 2819677,2809820,2819674,2819679,2819660,3819675,],
        borderWidth: 1,
        borderColor: '#36A2EB',
        backgroundColor: '#7EA4FC',
      }]
    },
    options: {

      scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize : 14,
					}
				}]
			},

      plugins: {//그래프에 데이터 직접 표시 (마우스 올렸을때가 아니라 그래프 자체에 데이터표시)
//         datalabels: {
// //       			backgroundColor: '#ab47bc',
//             borderRadius: 4,
//             color: '#4e342e',
//             font: {
//               weight: 'bold'
//             },
//             formatter: function(value, context) { return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "마리"; },
//             padding: 1,
//             align: 'end'
//         }
    },
    tooltips: { 
      callbacks: { 
          label: function(tooltipItem, data) { //그래프 콤마
              return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "마리"; 
              } 
   },}
      
      
    }
  });

  new Chart(document.getElementById('sell_chart'), {
    type: 'line',
    data: {
      labels: ['2011년', '2012년', '2013년', '2014년', '2015년', '2016년', '2017년', '2018년', '2019년', "2020년", "2021년"],
      datasets: [{
        label: '평균가격(두, 한우 거세우)',
        data: [5653269, 6062250, 5798795, 6293700, 7180230, 8102453,7721560,8243400,8468388,9452945,10245483,],
        borderWidth: 1,
        borderColor: '#36A2EB',
        backgroundColor: '#7EA4FC',
      }]
    },
    options: {

      scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontSize : 14,
					}
				}]
			},

      plugins: {
    },
    tooltips: { 
      callbacks: { 
          label: function(tooltipItem, data) { //그래프 콤마
              return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"; 
              } 
   },}
      
      
    }
  });