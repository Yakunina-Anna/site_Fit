<?php
use PHPMailer/PHPMailer/PHPMailer;
use PHPMailer/PHPMailer/Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true); //объявление плагина
$mail->CharSet= 'UTF-8'; //настройка кодировки
$mail->setLanguage('ru','phpmailer/language/'); // языковой файл 
$mail->IsHTML(true); // возможность тега в письме

//от кого письмо
$mail-> setForm('info@fit.guru');
//Кому отправить
$mail->addAdress('yanchiklebedeva1991@mail.ru');

//Тема письма
$mal->Subject = "Заявка с сайта на тренировку"

//тело письма
$body ='<h1>Заявка на тренировку с сайта</h1>'

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>'
}

if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong>'.$_POST['phone'].'</p>'
}

if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong>'.$_POST['message'].'</p>'
}

// $mail->Body= $body;

//Отправляем пиьсмо
if(!$mail->send()){
    $message ='Ошибка';
} else{
    $message = 'Данные отправлены!'
}

$response =['message'=>$message];

header('Content-type: application/json');
echo json_encode($response);