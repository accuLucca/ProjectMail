$(document).ready(function(){
	$("#cEntrada").click(function(){
		visualizarEmails();
	})
})

function visualizarEmails (){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "php/cEmails.php",
		success: function(retorno){
			var html="";
			for(var i =0; i < retorno.length; i++){
				html +="<tr>";
				html +="<td>"+retorno[i]["remetente"]+"</td>";
				html +="<td>"+retorno[i]["assunto"]+"</td";
				html +="<td>"+retorno[i]["previa"]+"</td>";
				html +="</tr>"
			}
			$("#tEmails").html(html);
		} 
	})
}

