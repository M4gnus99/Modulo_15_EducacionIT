$(document).ready(function(){
    $('#btn-calcular').click(function(){
        $('#gastos-necesarios').val("$"+Number($('#ingresos').val()) * 0.5);
        $('#gastos-opcionales').val("$"+Number($('#ingresos').val()) * 0.3);
        $('#ahorro-inversion').val("$"+Number($('#ingresos').val()) * 0.2);
    });
});