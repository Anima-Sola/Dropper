<?php if(basename(__file__) == 'config.php') exit; ?>
<?xml version="1.0" encoding="utf-8"?>
<xml>
    <Addresses>
        <!-- Enter your e-mail address -->
        <address>animasola@yandex.ru</address>
        <address on="subject" value="Support"></address>
        <address on="subject" value="Sales"></address>
        <address on="subject" value="Other"></address>
    </Addresses>
    <Config>
        <smtp>
        <!-- smtp gmail config -->
            <use>no</use>
            <auth>yes</auth>
            <secure>tls</secure>
            <host>tls://smtp.gmail.com</host>
            <username>a@gmail.com</username>
            <password>123</password>
            <port>465</port>
        </smtp>
        <charset>utf-8</charset>
    </Config>
</xml>
