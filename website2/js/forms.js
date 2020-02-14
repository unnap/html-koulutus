function validateForm() {
  var x = document.forms["nonsense"]["nimi"].value;
  if (x == "") {
    alert("Nimi on pakollinen");
    return false;
  }
  var y = document.forms["nonsense"]["ika"].value;
  if (isNaN(y)) {
    alert("Vain numeroita ikä-laatikkoon pls");
    return false;
    }
    if (y < 18) {
     alert("Olet alaikäinen");
     return false;
  }
  var f = document.forms["nonsense"]["viesti"].value;
  if (f == "") {
    alert("Viesti on PAKOLLINEN");
    return false;
  }
  }
