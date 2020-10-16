
function evento(){
    var comando=document.getElementById('comando');
    msn=msn+comando.value+'\n';
    comando.value='';
    document.getElementById('area').value=msn;
}

