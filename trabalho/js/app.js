function allowDrop(ev) {
    ev.preventDefault();
}

function denyDrop(ev) {
    ev.stopPropagation();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function leave(ev) {
    ev.preventDefault();
    ev.target.style.border = "section";

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.style.border = "none";
    ev.target.style.background = "inherit";
    calcularProdutos();
    zeraQuantidade();
}

var ajustartotal = 0;
function calcularProdutos() {
    var total = 0;
    var qtdeTotal = 0;
  



    $("#carrinho").find("article").each(function () {
        $(this).find("input[name='qtde']").prop("disabled", false);
        var qtde = $(this).find("input[name='qtde']").val();
        console.log($(this).find("input[name='qtde']").val());
        var valor = $(this).find("input[name='valor']").val();
        var sub_total = qtde * valor;
        qtdeTotal = parseInt(qtde) + qtdeTotal;
        console.log(qtdeTotal);
        total = total + sub_total;
        ajustartotal = "R$ " + total.toFixed(2).replace(".", ",");


    });

    $("#valor-total").html(ajustartotal);
    $("#total-itens").html(qtdeTotal);

}

function zeraQuantidade() {
    $('#produtos').find('article').each(function () {
        $(this).find("input[name='qtde']").val(0);
        $(this).find("input[name='qtde']").prop("disabled", true);
    });
}

function alerta() {
    alert("Pedido finalizado no valor de " + ajustartotal + " \nObrigado por Comprar Conosco")
}

$("#carrinho").change(function () {
    calcularProdutos();
});

