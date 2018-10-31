<?php
header('Content-Type: application/json; charset=utf-8');

require_once '../../config/Conexao.php';
require_once '../../models/Post.php';

if($_SERVER['REQUEST_METHOD']!='GET') die(json_encode(["error"=> 'Método errado']));
$db = new Conexao();
$post = new Post($db->getConexao());
try{
    if(isset($_GET['id']) && $_GET['id']>0){
        $post->read($_GET['id']);
    }else{
        $post->read();
    }

}catch(PDOException $e){
    die("ERRO: ".$e->getMessage());
}
