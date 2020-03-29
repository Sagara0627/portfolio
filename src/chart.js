////////////////////////////////////
/////// HTMLのレーダーチャート///////
////////////////////////////////////

let html = document.getElementById("HTML");

let htmlChart = new Chart(html, {
  type: "radar",
  data: {
    labels: ["文法", "理解度", "応用", "コードの綺麗さ",
      "オリジナリティ", "実務経験", "楽しさ"],
    datasets: [
      {
        label: "HTML",
        data: [90, 90, 80, 75, 70, 10, 100],
        backgroundColor: "rgba(0,255,0,0.2)",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "#fff"
      }
    ]
  },
  options: {
    scale: {
      pointLabels: {
        fontSize: 15
      },
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        fontSize: 10
      },
      gridLines: {
        display: true,
        color: "white"
      }
    }
  }
});

////////////////////////////////////
/////// CSSのレーダーチャート ///////
////////////////////////////////////

let css = document.getElementById("CSS");

let cssChart = new Chart(css, {
  type: "radar",
  data: {
    labels: ["文法", "理解度", "応用", "コードの綺麗さ",
      "オリジナリティ", "実務経験", "楽しさ"],
    datasets: [
      {
        label: "CSS",
        data: [90, 90, 80, 80, 80, 10, 100],
        backgroundColor: "rgba(0,0,255,0.2)",
        borderColor: "blue",
        pointBackgroundColor: "blue",
        pointBorderColor: "#fff"
      }
    ]
  },
  options: {
    scale: {
      pointLabels: {
        fontSize: 15
      },
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        fontSize: 10
      },
      gridLines: {
        display: true,
        color: "white"
      }
    }
  }
});

///////////////////////////////////////////
/////// JavaScriptのレーダーチャート ///////
///////////////////////////////////////////

let javaScript = document.getElementById("JavaScript");

let javaScriptChart = new Chart(javaScript, {
  type: "radar",
  data: {
    labels: ["文法", "理解度", "応用", "コードの綺麗さ",
      "オリジナリティ", "実務経験", "楽しさ"],
    datasets: [
      {
        label: "JavaScript",
        data: [90, 85, 70, 65, 55, 0, 100],
        backgroundColor: "rgba(255,255,0,0.2)",
        borderColor: "yellow",
        pointBackgroundColor: "yellow",
        pointBorderColor: "#fff"
      }
    ]
  },
  options: {
    scale: {
      pointLabels: {
        fontSize: 15
      },
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        fontSize: 10
      },
      gridLines: {
        display: true,
        color: "white"
      }
    }
  }
});

////////////////////////////////////
/////// PHPのレーダーチャート ///////
////////////////////////////////////

let php = document.getElementById("PHP");

let phpChart = new Chart(php, {
  type: "radar",
  data: {
    labels: ["文法", "理解度", "応用", "コードの綺麗さ",
      "オリジナリティ", "実務経験", "楽しさ"],
    datasets: [
      {
        label: "PHP",
        data: [80, 75, 40, 50, 40, 0, 90],
        backgroundColor: "rgba(255,0,0,0.2)",
        borderColor: "red",
        pointBackgroundColor: "red",
        pointBorderColor: "#fff"
      }
    ]
  },
  options: {
    scale: {
      pointLabels: {
        fontSize: 15
      },
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        fontSize: 10
      },
      gridLines: {
        display: true,
        color: "white"
      }
    }
  }
});

/////////////////////////////////////
/////// Reactのレーダーチャート ///////
/////////////////////////////////////

let react = document.getElementById("React");

let reactChart = new Chart(react, {
  type: "radar",
  data: {
    labels: ["文法", "理解度", "応用", "コードの綺麗さ",
      "オリジナリティ", "実務経験", "楽しさ"],
    datasets: [
      {
        label: "React",
        data: [70, 70, 45, 40, 40, 0, 85],
        backgroundColor: "rgba(128,0,128,0.2)",
        borderColor: "purple",
        pointBackgroundColor: "purple",
        pointBorderColor: "#fff"
      }
    ]
  },
  options: {
    scale: {
      pointLabels: {
        fontSize: 15
      },
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        fontSize: 10
      },
      gridLines: {
        display: true,
        color: "white"
      }
    }
  }
});

let w = $(".chart").width();
let h = $(".chart").height();

$("#HTML").attr("width", w);
$("#HTML").attr("height", h);
$("#CSS").attr("width", w);
$("#CSS").attr("height", h);
$("#JavaScript").attr("width", w);
$("#JavaScript").attr("height", h);
$("#PHP").attr("width", w);
$("#PHP").attr("height", h);
$("#React").attr("width", w);
$("#React").attr("height", h);