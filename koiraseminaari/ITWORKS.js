function validateForm() {
  var snimi = document.getElementById("snimi").value;
  var enimi = document.getElementById("enimi").value;
  var losoite = document.getElementById("losoite").value;
  var postinro = document.getElementById("postinro").value;
  var postitp = document.getElementById("postitp").value;
  var puh = document.getElementById("puh").value;
  var email = document.getElementById("email").value;
  var org = document.getElementById("org").value;
  var ammatti = document.getElementById("ammatti").value;
  var bd = document.getElementById("bd").value;
  var bm = document.getElementById("bm").value;
  var by = document.getElementById("by").value;
  var hinta = document.getElementById("snimi").value;
  var ruoka = document.getElementById("snimi").value;
  var lisat = document.getElementById("snimi").value;
  var errors = "";

  if(snimi == "") {
    errors += "<li>Etunimi puuttuu</li>";
  }

  if(enimi == "") {
    errors += "<li>pls enter more name</li>";
  }
  if(errors.length) {
    document.getElementById("valSummary").innerHTML =
    "<b>Korjaa seuraavat kohdat:</b><ul>" + errors + "</ul>";
    return false;
  }
}
