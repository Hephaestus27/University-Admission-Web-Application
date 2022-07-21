
  function validateFileType(){
    var fileName = document.getElementById("fileName").value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
      document.getElementById("file-name").innertext=fileName;
    }else{
        alert("Only jpg/jpeg and png files are allowed!");
    }   
}
