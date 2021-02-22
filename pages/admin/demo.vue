<template>
  <div class="workspace">

    <header>
      <div class="title">Dashboard</div>
      <div class="user"></div>
      <div class="interval">
        <ul>
          <li>Неделя</li>
          <li class="active">Месяц</li>
        </ul>
      </div>
    </header>

    <section>
      <div class="chart">
        <canvas id="c1" width="900" height="200"></canvas>
      </div>
    </section>
    <section>
      <header>Всего конверсий</header>
      <div class="inlineChart">
        <canvas id="c2" width="100" height="100"></canvas>
        <div class="chart-info">
          <div class="value">$36,146</div>
          <div class="title">Credit sales</div>
        </div>
      </div>
      <div class="inlineChart">
        <canvas id="c3" width="100" height="100"></canvas>
        <div class="chart-info">
          <div class="value">$24,734</div>
          <div class="title">Channel Sales</div>
        </div>
      </div>
      <div class="inlineChart">
        <canvas id="c4" width="100" height="100"></canvas>
        <div class="chart-info">
          <div class="value">$15,650</div>
          <div class="title">Direct Sales</div>
        </div>
      </div>
    </section>
    <section>
      <table>
        <thead>
          <tr>
            <th>November Sales</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dallas Oak Dining Chair</td>
            <td>20</td>
            <td>$1,342</td>
          </tr>
          <tr>
            <td>Benmore Glass Coffee Table</td>
            <td>18</td>
            <td>$1,550</td>
          </tr>
          <tr>
            <td>Aoraki Leather Sofa</td>
            <td>15</td>
            <td>$4,170</td>
          </tr>
          <tr>
            <td>Bali Outdoor Wicker Chair</td>
            <td>25</td>
            <td>$2,974</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>


<script>
export default {
  name: "demo",
  layout: "admin",
  mounted() {
    var data1 = {
      labels: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье"
      ],
      datasets: [
        {
          fillColor: "rgba(56,175,91,.1)",
          strokeColor: "rgba(56,175,91,1)",
          pointColor: "rgba(56,175,91,1)",
          pointStrokeColor: "rgba(0,0,0,0.6)",
          data: [1000, 1200, 935, 990, 1050, 1030, 1040]
        },
        {
          fillColor: "rgba(234,142,57,.1)",
          strokeColor: "rgba(234,142,57,1)",
          pointColor: "rgba(234,142,57,1)",
          pointStrokeColor: "rgba(0,0,0,0.6)",
          data: [1300, 1200, 1000, 1200, 1100, 1150, 1180]
        },
        {
          fillColor: "rgba(236,72,127,.1)",
          strokeColor: "rgba(236,72,127,1)",
          pointColor: "rgba(236,72,127,1)",
          pointStrokeColor: "rgba(0,0,0,0.6)",
          data: [1400, 1350, 1250, 1250, 1350, 1500, 1550]
        }
      ]
    };

    var options1 = {
      scaleFontColor: "rgba(255,255,255,0.7)",
      scaleLineColor: "rgba(0,0,0,0)",
      scaleGridLineColor: "rgba(255,255,255,0.1)",
      scaleFontFamily: "Open Sans",
      scaleFontSize: 14,
      bezierCurve: true,
      scaleShowLabels: true,
      pointDotRadius: 6,
      animation: true,
      scaleShowGridLines: true,
      datasetFill: true,
      responsive: true
    };

    new Chart(c1.getContext("2d")).Line(data1, options1);





    var data2 = [
      {
        value: 80,
        color: "rgba(236,72,127,1)",
        label: ""
      },
      {
        value: 20,
        color: "#3c4449",
        label: ""
      }
    ];

    var options2 = {
      animationEasing : "easeOutExpo",
      animationSteps : 120,
      responsive: true,
      segmentShowStroke: false,
      percentageInnerCutout: 90
    };

    new Chart(c2.getContext("2d")).Doughnut(data2, options2);





    var data2 = [
      {
        value: 64,
        color: "rgba(234,142,57,1)",
        label: ""
      },
      {
        value: 36,
        color: "#3c4449",
        label: ""
      }
    ];

    var options2 = {
      animationEasing : "easeOutExpo",
      animationSteps : 70,
      responsive: true,
      segmentShowStroke: false,
      percentageInnerCutout: 90
    };

    new Chart(c3.getContext("2d")).Doughnut(data2, options2);

    var data2 = [
      {
        value: 34,
        color: "rgba(56,175,91,1)",
        label: ""
      },
      {
        value: 66,
        color: "#3c4449",
        label: ""
      }
    ];

    var options2 = {
      animationEasing : "easeOutExpo",
      animationSteps : 70,
      responsive: true,
      segmentShowStroke: false,
      percentageInnerCutout: 90
    };

    new Chart(c4.getContext("2d")).Doughnut(data2, options2);
  }
}
</script>


<style scoped>





section {
  margin-top: 20px;
  margin-bottom: 20px;
}
section > header {
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 600;
}
section .chart {
  height: 200px;
}
section .inlineChart {
  float: left;
  width: 30%;
  margin-bottom: 50px;
}
section .inlineChart canvas {
  float: left;
}
section .inlineChart .chart-info {
  float: left;
  padding-left: 20px;
  padding-top: 16px;
}
section .inlineChart .chart-info .value {
  font-size: 2rem;
  color: #d3d3d3;
}
section table {
  width: 100%;
}
section table th,
section table td {
  padding: 15px 0px;
  border-bottom: 1px solid #2a3843;
}
section table thead th {
  text-align: left;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #d3d3d3;
}
</style>
