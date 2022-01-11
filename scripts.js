//para el buscador funcional
function BuscarTexto(){

 var Valortexto=document.getElementById('search').value;
 debugger;
 var compu = document.getElementById('divcomputadores');
 var moni = document.getElementById('divmonitores');
 var servi = document.getElementById('divservidores');
 var celu  = document.getElementById('divcelulares');
 var acces = document.getElementById('divaccesorios');
 if(Valortexto==="computadores"){
 //  document.getElementById('computadores').style.display='block';
    compu.style.display = 'block';
    moni.style.display = 'none';
    servi.style.display = 'none';
    celu.style.display = 'none';
    acces.style.display = 'none';
    
 } else if(Valortexto==="monitores"){
    compu.style.display = 'none';
    moni.style.display = 'block';
    servi.style.display = 'none';
    celu.style.display = 'none';
    acces.style.display = 'none';
 }else if(Valortexto==="servidores"){
    compu.style.display = 'none';
    moni.style.display = 'none';
    servi.style.display = 'block';
    celu.style.display = 'none';
    acces.style.display = 'none';

}else if(Valortexto==="celulares"){
    compu.style.display = 'none';
    moni.style.display = 'none';
    servi.style.display = 'none';
    celu.style.display = 'block';
    acces.style.display = 'none';

 }
else if(Valortexto==="accesorios"){
    compu.style.display = 'none';
    moni.style.display = 'none';
    servi.style.display = 'none';
    celu.style.display = 'none';
    acces.style.display = 'block';

 }
else{
    compu.style.display = 'none';
    moni.style.display = 'none';
    servi.style.display = 'none';
    celu.style.display = 'none';
    acces.style.display = 'none';

    swal({
        type: 'error',
        title: "Estimado Usuario",
        text: 'No se encontro resultados para su busqueda',
        position:'top',
        icon:'warning',
        timer:5000,
        background:'#000'
     });
 }
}
