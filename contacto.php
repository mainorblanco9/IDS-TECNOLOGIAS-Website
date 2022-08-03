<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Ejemplo con el cargador automático de composer
require 'vendor/autoload.php';
/*require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';*/
//Crear una instancia y pasar true para permitir las excepciones
$mail = new PHPMailer(true);
try {
    //Configuración del servidor
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;             //Habilitar los mensajes de depuración
    $mail->isSMTP();                                   //Enviar usando SMTP
    $mail->Host       = 'smtp.gmail.com';            //Configurar el servidor SMTP
    $mail->SMTPAuth   = true;                          //Habilitar autenticación SMTP
    $mail->Username   = 'michaeljuega@gmail.com';            //Nombre de usuario SMTP
    $mail->Password   = 'wpzqetygvgwmoume';                      //Contraseña SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   //Habilitar el cifrado TLS
    $mail->Port       = 587;                           //Puerto TCP al que conectarse; use 587 si configuró `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Emisor
    $mail->setFrom('michaeljuega@gmail.com', 'IDS Tecnologias');

    //Destinatarios
    $mail->addAddress($_POST['correo'], $_POST['nombre']);     //Añadir un destinatario, el nombre es opcional

    //Destinatarios opcionales 
    /*$mail->addReplyTo('michaeljuega@gmail.com', 'Information');  //Responder a
    $mail->addCC('animeomiruu@gmail.com');                        //Copia pública*/
    //$mail->addBCC('michaeljuega@gmail.com');                      //Copia oculta (aca se pone el correo
    // de aviso de contacto)

    //Archivos adjuntos
    //$mail->addAttachment('files/comunicado.pdf', 'Comunicado');         //Agregar archivos adjuntos, nombre opcional

    //Nombre opcional
    $mail->isHTML(true);                         //Establecer el formato de correo electrónico en HTMl
    $mail->Subject = 'Gracias por contactarnos';             
    $mail->Body    = 'Hola,<br>

    <p> Gracias por contactarnos! Nuestros representantes de soporte revisarán tu mensaje. Nos pondremos 
    en contacto en un plazo de 48 horas.

    Si tu problema no puede esperar, también puedes comunicarse con nosotros a través del chat en vivo en 
    https://idsytecnologias.netlify.app/ o llamando al +506 8964 7060.<br>

    Un saludo cordial,<br><br>

    IDS Tecnologias</p>';
    $mail->AltBody = 'Este es el cuerpo en texto sin formato para clientes de correo que no son HTML';
      
    $mail->send();    //Enviar correo eletrónico
      /*********Correo para IDS Tecnologias **************/
      //Emisor
    $mail->setFrom('michaeljuega@gmail.com', 'IDS Tecnologias');

    //Destinatarios
    $mail->addAddress('betancourtmoran@gmail.com', 'Michael Betancourt Mora'); //Añadir un destinatario, el nombre es opcional
    $mail->addBCC('michaeljuega@gmail.com');  
    //Nombre opcional
    $mail->isHTML(true);                         //Establecer el formato de correo electrónico en HTMl
    $mail->Subject = $_POST['nombre'] . ' - ' .' solicita servicio';             
    $mail->Body    = '<p>La empresa '. ' - ' .$_POST['nombre']. ' - ' .' solicita: <br>' .
    $_POST['mensaje'].' - ' .' <br><br>
    Correo de contacto: '. ' - ' .$_POST['correo']. ' - ' .'
    </p>';
    $mail->AltBody = 'Este es el cuerpo en texto sin formato para clientes de correo que no son HTML';

    $mail->send();  
    echo "<script>alert('Su solicitud a sido enviada');window.location.href='index.html';</script>";

    

} catch (Exception $e) {
    echo "<script>alert('No se pudo enviar sus solicitud, vuelva a intentarlo {$mail->ErrorInfo}');window.location.href='index.html';</script>";
}