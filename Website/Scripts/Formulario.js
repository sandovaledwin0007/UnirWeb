

$(document).ready(function(){  

    $("#formulario").submit(function () {  
	
        if($("#nombre").val().length < 4) { 
		
			$("#nombre").css("background-color","#FCB6B9") 
            alert("El nombre debe tener mas de 3 caracteres");  
            return false;  
			
          }
		    else{
				$("#nombre").css("background-color","#70FF75") 
		 }
				
        if($("#apellidos").val().length < 4) { 
		
			$("#apellidos").css("background-color","#FCB6B9") 
            alert("Los apellidos deben tener mas de 3 caracteres");  
            return false;  
			
          }
		    else{
				$("#apellidos").css("background-color","#70FF75") 
				}  
		
        if($("#telefono").val().length < 4 || isNaN($("#telefono").val())) {
			
			$("#telefono").css("background-color","#FCB6B9")   
            alert("El telefono debe tener mas de 3 caracteres y solo numeros");  
            return false;
			  
          }  else{
			 $("#telefono").css("background-color","#70FF75") 
			 }
			 
        if($("#email").val().length < 1) {  
		
			$("#email").css("background-color","#FCB6B9") 
            alert("La direccion e-mail es obligatoria");  
            return false; 
			 
        }  else{
			$("#email").css("background-color","#70FF75") 
			}
			
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
		
			$("#email").css("background-color","#FCB6B9")
            alert("La direccion parece incorrecta");  
            return false;  
        }  
     		else{
			$("#email").css("background-color","#70FF75") 				
			}
		if($("#comentario").val().length < 20){
				$("#comentario").css("background-color","#FCB6B9") 
            alert("Comentarios deben ser Superiores a 5 Palabras");  
            return false; 
			 
        }  else{
			$("#comentario").css("background-color","#70FF75") 
			}	
		alert("datos enviados")	
    });  
});  