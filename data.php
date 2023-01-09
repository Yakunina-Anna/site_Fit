<?php
    $theme = "Заявка на тренировку";
    $useremail = "lebedeva-fit@info.ru";
    $youremail = "Lebedeva-fit1991@yandex.ru";

    $name = "пользователя";
    $userphone = "";
    $text = "";

    if(isset($_POST['firstName'])) $name = $_POST['firstName'];
    if(isset($_POST['theme'])) $theme = $_POST['theme'];
    if (isset($_POST['email'])) $useremail = $_POST['email'];
    if (isset($_POST['phone'])) $userphone = $_POST['phone'];
    if (isset($_POST['message'])) $text = $_POST['message'];
    // if(isset($_POST['theme'])) $theme = $_POST['theme'];
    // if(isset($_POST['name'])) $name = $_POST['name'];
    // if (isset($_POST['email'])) $useremail = $_POST['email'];
    // if (isset($_POST['text'])) $text = $_POST['text'];
  
    $subject = $theme;
    $header .= "Content-type: text/html; charset=\"utf-8\"\r\n";
    $header="From: $name <$useremail>\r\n\r\n";
            
    $message = "Вам пришло сообщение от, $name!\n Номер телефона: $userphone!\n Текст сообщения: $text";
     if (mail($youremail, $subject, $message, $header,$userphone))
            echo "Спасибо, мы свяжемся с Вами в ближайшее время!";
      else
          echo "Сообщение не доставлено попытайтесь еще раз!";     
    
  ?>