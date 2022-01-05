$(document).ready(function(){
   /* alert("Hola")*/
   $('.category_lista .category_item[category="todo"]').addClass('ct_item-active')
    });

    //agregando el evento click al  enlace//
    $('.category_item').click(function(){
        var cateProduct = $(this).attr('category');//para cuando se le de click me filtre por categoria//
        console.log(cateProduct);
    $('.category_item').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');
    });
//para ocultar los productos
$('.productos_Item').hide();

//para ocultar solo la categoria seleccionada
$('.productos_Item .category_item[category="computadores"]').show();