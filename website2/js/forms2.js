function validateForm()
{
  var nimi = document.nonsense.nimi;
  if(nimi.value == "")
  {
    alert("Nimi pitää olla!");
    nimi.focus();
    return false;
  }
  var ika = document.nonsense.ika;
  if(ika.value == "")
  {
    alert("Ikä pitää olla!");
    ika.focus();
    return false;
  }
  if(isNaN(ika.value))
  {
    alert("Vain numeroita ikä laatikkoon pls");
    ika.focus();
    return false;
  }
  if(ika.value < 18)
  {
    alert("Olet alaikäinen!");
    ika.focus();
    return false;
  }
  var nuts = document.nonsense.nuts;
  if(nuts.value == "valitse")
  {
    alert("Valitse pähkinä!");
    nuts.focus();
    return false;
  }
  var variCheck=-1;

  for (var i=0; i < document.nonsense.vari.length;i++)
  {
    if (document.nonsense.vari[i].checked==true)
    {
        variCheck=i;
    }
  }
  if(variCheck==-1)
  {
  alert("Valitse YKSI väri");
  return (false);
  }

var elainCheck=-1;

for (var i=0; i < document.nonsense.elain.length;i++)
{
  if (document.nonsense.elain[i].checked==true)
  {
      elainCheck=i;
  }
}
if(elainCheck==-1)
{
alert("Pick one or more animals");
return (false);
}
}

/*Tyhjennys tarkistus*/

function Tyhjennys() {
  If confirm('Tyhjennetäänkö lomake?');
    return true;
  else
    return false;
}

/* character count*/

function countChars(obj) {
    var maxLength = 200;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);

    if(charRemain < 0) {
        document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    } else {
        document.getElementById("charNum").innerHTML = charRemain+' characters remaining';
    }
}
