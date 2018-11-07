$(document).ready(function(){
    $("#Salvar").click(function(){
        if ($("#nome").val() == "") {
            $("#nome").addClass("erro");
        }
        else{
            $("#nome").removeClass("erro");
        }
    });
    $("#Salvar").click(function(){
        if ($("#sobrenome").val() == "") {
            $("#sobrenome").addClass("erro");
        }
        else{
            $("#sobrenome").removeClass("erro");
        }
    });
    $("#Salvar").click(function(){
        if ($("#email").val() == "") {
            $("#email").addClass("erro");
        }
        else{
            $("#email").removeClass("erro");
        }
    });
    $("#Salvar").click(function(){
        if ($("#senha").val() == "") {
            $("#senha").addClass("erro");
        }
        else{
            $("#senha").removeClass("erro");
        }
    });
    $("#Salvar").click(function(){
        if ($("#confirmar").val() == "" || $("#confirmar").val() != $("#senha").val()) {
            $("#confirmar").addClass("erro");
        }
        else{
            $("#confirmar").removeClass("erro");
        }
    });
});