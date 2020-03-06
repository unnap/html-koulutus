<?php
//haetaan tietokannasta tiedot muuttujiin
$enimi = $_GET["etunimi"];
$snimi = $_GET["sukunimi"];
$losoite = $_GET["lahiosoite"];
$postinro = $_GET["postinumero"];
$postitp = $_GET["postitoimipaikka"];
$maa = $_GET["maa"];
$puh = $_GET["puhelin"];
$email = $_GET["email"];

//otetaan yhteys tietokantaan
$palvelin = "localhost";
$kayttaja = "root";
$salasana = "";
$tietokanta = "lomake";

$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if(mysqli_connect_error()) {
  die("Tietokantaan ei saatu yhteyttä");
}

$kysely = "INSERT INTO osoiterekisteri (Etunimi, Sukunimi, Lahiosoite, Postinumero,
Postitoimipaikka, Maa, Puhelinnumero, Email) VALUES
('$enimi', '$snimi', '$losoite', '$postinro', '$postitp', '$maa', '$puh', '$email')";
if(mysqli_query($link, $kysely)) {
  echo "Uudet tiedostot paivitetty";
} else {
  echo "Vihe: " . $kysely . "<br>" . mysqli_error($link);
}
mysqli_close($link);
?>
