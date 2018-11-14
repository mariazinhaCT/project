<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once '../../config/Conexao.php';
require_once '../../models/Categoria.php';

if($_SERVER['REQUEST_METHOD']!='GET') die(json_encode(["error"=> 'Método errado']));
$db = new Conexao();
$cat = new Categoria($db->getConexao());
try{
    if(isset($_GET['id']) && $_GET['id']>0){
        $cat->read($_GET['id']);
    }else{
        $cat->read();
    }

}catch(PDOException $e){
    die("ERRO: ".$e->getMessage());
}
