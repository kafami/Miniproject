function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var oper = document.getElementById("operator").value;
  
    if (oper === "area") {
      document.getElementById("result").value = (1 / 2) * num1 * num2;
    } else {
      document.getElementById("result").value = num1 + num2 + num3;
    }
    event.preventDefault();
  
    var hasilResult = document.getElementById("result").value;
  
    if (isNaN(hasilResult)) {
      alert("Please input number");
    }
  }

function disable() {
    var opera = document.getElementById("operator").value;
  
    if (opera === "area") {
      document.getElementById("num3").disabled = true;
    } else {
      document.getElementById("num3").disabled = false;
    }
  }

function reset() {
    document.getElementById("form").reset();
    console.log("coba")
  }

function calculate1() {
    var alas = parseInt(document.getElementById("floor").value);
    var tinggi = parseInt(document.getElementById("height").value);
    var oper1 = document.getElementById("operator-parallelogram").value;
  
    if (oper1 === "pirimeter") {
      document.getElementById("result").value = 2 * (alas + tinggi);
    } else {
      document.getElementById("result").value = alas * tinggi;
    }
    event.preventDefault();
  
    var hasilResultJajar = document.getElementById("result").value;
  
    if (isNaN(hasilResultJajar)) {
      alert("Please input number");
    }
  }