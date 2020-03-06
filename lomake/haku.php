<?php
$palvelin = "localhost";
$kayttaja = "root";
$salasana = "";
$tietokanta = "lomake";

$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if(mysqli_connect_error()) {
  die("Tietokantaan ei saatu yhteyttä");
}
$kysely = "SELECT * FROM osoiterekisteri";
$vastaus = mysqli_query($link, $kysely);
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Tiedon haku tietokannasta</title>
  </head>
  <body>
    <table>
      <tr>
        <th colspan="6"><h2>Osoitetiedot</h2></th>
      </tr>
      <tr>
        <th>Etunimi</th>
        <th>Sukunimi</th>
        <th>Lähiosoite</th>
        <th>Postinumero</th>
        <th>Postitoimipaikka</th>
        <th>Maa</th>
        <th>Puhelin</th>
        <th>Sähköposti</th>
      </tr>
      <?php
      while($rivit = $vastaus -> fetch_assoc())
      {
       ?>
        <tr>
          <td><?php echo $rivit["Etunimi"] ?> </td>
          <td><?php echo $rivit["Sukunimi"] ?> </td>
          <td><?php echo $rivit["Lahiosoite"] ?> </td>
          <td><?php echo $rivit["Postinumero"] ?> </td>
          <td><?php echo $rivit["Postitoimipaikka"] ?> </td>
          <td><?php echo $rivit["Maa"] ?> </td>
          <td><?php echo $rivit["Puhelinnumero"] ?> </td>
          <td><?php echo $rivit["Email"] ?> </td>
        </tr>
      <?php
      }
      ?>
    </table>
  </body>
</html>
<?php
mysqli_close($link);
?>
