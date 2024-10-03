<?php
$host = 'localhost';
$db = 'vidaadulta_db';
$user = 'root'; // Usuário padrão do WAMP
$pass = ''; // Senha padrão do WAMP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>