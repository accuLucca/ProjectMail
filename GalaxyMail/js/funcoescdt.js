$(document).ready(function(){
    $("#Salvar").click(function(){
        if ($("#name").val() == "") {
            $("#name").addClass("erro");
        }
        else{
            $("#name").removeClass("erro");
        }
    });
    $("#Salvar").click(function(){
        if ($("#lastName").val() == "") {
            $("#lastName").addClass("erro");
        }
        else{
            $("#lastName").removeClass("erro");
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