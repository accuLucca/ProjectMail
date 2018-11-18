<?php
	$arquivo=file_get_contents("../xml/cEntrada.xml");
	$xml = simplexml_load_string($arquivo);

	for($i = 0; $i < count($xml->email->mensagem)); $i++){
		$retorno[$i]["remetente"]=trim($xml->email->mensagem[$i]->remetente);
		$retorno[$i]["assunto"]=trim($xml->email->mensagem[$i]->assunto);
		$retorno[$i]["previa"]=trim($xml->email->mensagem[$i]->previa);
	}
	echo json_decode($retorno);

?>