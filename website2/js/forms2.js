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
  var intVastaus=-1;

  for (var i=0; i < document.nonsense.vari.length;i++)
  {
    if (document.nonsense.vari[i].checked==true)
    {
        intVastaus=i;
    }
  }
  if(intVastaus==-1)
  {
  alert("Valitse YKSI väri");
  return (false);
  }

var intVasta=-1;

for (var i=0; i < document.nonsense.elain.length;i++)
{
  if (document.nonsense.elain[i].checked==true)
  {
      intVasta=i;
  }
}
if(intVasta==-1)
{
alert("Valitse eläin");
return (false);
}
}
