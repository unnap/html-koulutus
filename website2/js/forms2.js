function validateForm() {
  var nimi = document.nonsense.nimi;
  if(nimi.value == "") {
    alert("Nimi pitää olla!");
    nimi.focus();
    return false;
  }
  var ika = document.nonsense.ika;
  if(ika.value == "") {
    alert("Ikä pitää olla!");
    ika.focus();
    return false;
  }
  if(isNaN(ika.value)) {
    alert("Vain numeroita ikä laatikkoon pls");
    ika.focus();
    return false;
  }
  if(ika.value < 18) {
    alert("Olet alaikäinen!");
    ika.focus();
    return false;
  }
  var nuts = document.nonsense.nuts;
  if(nuts.value == "valitse") {
    alert("Valitse pähkinä!");
    nuts.focus();
    return false;
  }
  }

  /* MALLI
  function checkCheckBoxes(theForm) {
    if (
    theForm.MyCheckbox.checked == false)
    {
        alert ('You didn\'t choose any of the checkboxes!');
        return false;
    } else {
        return true;
    }
}*/
