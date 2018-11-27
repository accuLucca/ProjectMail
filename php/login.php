<?php
	$error = false;
	if(isset($_POST["login"])){
		$email = $_POST["email"];
		$password = $_POST["password"];
		$sucesso = FALSE;
		$xml = simplexml_load_file("../xml/usuários/usuarios.xml");

		foreach ($xml->usuario as $usuario) {
			if ($password == $usuario->password && $email == $usuario->email){
				$sucesso == TRUE;
				session_start();
				$_SESSION["email"] = $email;
				header("Location: ../paginas/email.html");
			}
		}
	} 
?>
