$(document).ready(function(){
    // FUNCION PARA CALCULAR EL EQUILIBRIO FINAL
    function operacion (PrecioVenta,CostosFijos,CostosVariables){
        let resultado = CostosFijos / (PrecioVenta - CostosVariables);
        alert ("El punto de Equilibrio obtenido es "+resultado);
    }

    $("#btn-calcular").click(function(){
        // CARGANDO LAS VARIABLES
        let PrecioVenta = Number($('#precioVenta').val());

        let CostosFijos = Number($('#costosFijos').val());

        let CostosVariables = Number($('#costosVariables').val());
        // LLAMADA DE LA FUNCION
        operacion(CostosFijos, PrecioVenta,CostosVariables)
    });
});