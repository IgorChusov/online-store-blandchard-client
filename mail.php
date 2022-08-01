
<?php
    $fName = 'Имя: '.$_POST['name'].' <br />';
    $fMail =  'Телефон: '.$_POST['tel'].' <br />';
    $AllInOne =  $fName.$fMail;
    $to = 'feniks080808@mail.ru';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
     $headers .= "From: Site <blandchardskillbox.tmweb.ru/>\r\n";
     if( mail($to, 'Свяжитесь с нами', $AllInOne, $headers)){
       echo "Спасибо, письмо успешно отправлено!";
     } else {
       echo "Произошла ошибка отправки";
     }

?>
