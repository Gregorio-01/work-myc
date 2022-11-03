$txtTitle = $_POST['txtTitle'];
 
$txtDescription = $_POST['txtDescription'];
 
$txtImage = $_POST['txtImage'];

$txtUrldrive = $_POST['txtUrldrive'];

$sql = "INSERT INTO proyectos_myc (title, description, image, urldrive) VALUES ('0', '$txtTitle', '$txtDescription', '$txtImage', '$txtUrldrive);"

$rs = mysqli_query($con, $sql);
