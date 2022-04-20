/* ============ Oculta y muestra el popup con la tecla Esc  =================*/
var elem = $( '#popup' )[0];	
$(document).on('keydown', function ( e ){
        if(e.keyCode === 27 ) {
       $(elem).closest('#popup');
        }
        });

/* ============ fin de funciones  =================*/
const cleanDiv = () => {

    const padre=document.querySelector("#popupBody");
    padre.removeChild(document.querySelector("#popupBody h2"));
    document.querySelector(".popupContent").innerHTML ="";
}
/* Para agregar la info a los popup */
function ssShowPopup(){
        
    $('#Servicios-ambiente').one("click",function(e){
        
        if(!!document.querySelector("#popupBody h2")) cleanDiv(); //si ya se creo contenido antes lo borramos
        let id = e.target.id;
        
         if(id==="card_GestionResiduoSolidos"){/*Si se selecciona Gestion de Residuos solidos 
         Programas institucionales en el manejo de Residuos Sólidos*/
         const creatTitle = document.createElement("h2");
         creatTitle.textContent="Gestion de Residuos solidos";
         const theFirstChild =document.getElementById("popupBody").firstChild;
         document.getElementById("popupBody").insertBefore(creatTitle,theFirstChild);

         const creatTitle2 = document.createElement("h3");
         creatTitle2.textContent="Programas institucionales en el" 
         +" manejo de Residuos Sólidos";
         document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);
        
         const creatImage = document.createElement("img");
         creatImage.src="images/RESIDUOSESPECIALES.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

         const creatImage2 = document.createElement("img");
         creatImage2.src="images/Biohazard-cleanup.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);

         const texto = document.createElement("p");
         texto.textContent="Enfocado en el reconocimiento en la" 
         +"variedad de residuos solidos existentes en cada establecimiento o por áreas funcionales,articulando una" 
         +"serie de líneas que minimicen los impactos ambientales e mpulsando una variedad de instrumentos bajo la" 
         +"legislación vigente, se destacan:";
         document.getElementsByClassName("popupContent")[0].appendChild(texto)

        let ul = document.createElement("ul");
 
        let li1 = document.createElement("li");
        let li1Texto = document.createTextNode("Implementación del Plan de Manejo (Gestión circular con reuso de materiales)");
        li1.appendChild(li1Texto);
     
        let li2 = document.createElement("li");
        let li2Texto = document.createTextNode("Gestión Administrativa");
        li2.appendChild(li2Texto);
        
        let li3 = document.createElement("li");
        let li3Texto = document.createTextNode("Educación y sensibilización");
        li3.appendChild(li3Texto);
        
        let li4 = document.createElement("li");
        let li4Texto = document.createTextNode("Comunicación y divulgación");
        li4.appendChild(li4Texto);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);

        document.getElementsByClassName("popupContent")[0].appendChild(ul);

         }else if(id==="card_GestionResiduoSolidos2"){/*Si se selecciona Gestion de Residuos solidos 
         Asesoría en la gestión de residuos peligrosos y especiales*/
         
         const creatTitle = document.createElement("h2");
         creatTitle.textContent="Gestion de Residuos solidos";
         const theFirstChild =document.getElementById("popupBody").firstChild;
         document.getElementById("popupBody").insertBefore(creatTitle,theFirstChild);

         const creatTitle2 = document.createElement("h3");
         creatTitle2.textContent="Asesoría en la gestión de residuos peligrosos y especiales";
         document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

         const creatImage = document.createElement("img");
         creatImage.src="images/Biohazard-cleanup.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

         const texto = document.createElement("p");
         texto.textContent="Se propondrá un programa mediante capacitaciónes especializadas con procedimientos" 
         +"y recomendaciones al personal en el manejo de residuos peligrosos o especiales de acuerdo al análisis"
         +"de cada establecimiento, para conocer las propiedades fisico-químicas de las sustancias que se estan"
         +" manipulando, con el fin de evitar accidentes y daños ambientales.";
         document.getElementsByClassName("popupContent")[0].appendChild(texto);

        }else if(id==="card_GestionResiduoSolidos3"){/*Si se selecciona Gestion de Residuos solidos 
        Análisis de volúmenes de generación y caracterización de Residuos sólidos*/

         const creatTitle = document.createElement("h2");
         creatTitle.textContent="Gestion de Residuos solidos";
         const theFirstChild =document.getElementById("popupBody").firstChild;
         document.getElementById("popupBody").insertBefore(creatTitle,theFirstChild);

         const creatTitle2 = document.createElement("h3");
         creatTitle2.textContent="Análisis de volúmenes de generación y caracterización de Residuos sólidos";
         document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

         const creatImage = document.createElement("img");
         creatImage.src="images/barrerCalle.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

         const creatImage2 = document.createElement("img");
         creatImage2.src="images/tendencias-de-la-mercadotecnia.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);

         const texto = document.createElement("p");
         texto.textContent="Delimitando un área (comunidad o cantón) o eligiendo una institución para estudio,"
         +"se determina la tasa de generación promedio ponderada de residuos, dando como resultado los kg/hab-día."
         +"Es importante hacer énfasis en que se puede demostrar que existen diferencias significativas en la composición"
         +"de residuos sólidos para los sectores comerciales y residenciales, principalmente en materiales orgánicos, papel," 
         +"cartón y plástico.";
         document.getElementsByClassName("popupContent")[0].appendChild(texto);
        
        }else if(id==="card_GestionResiduoSolidos4"){/*Si se selecciona Gestion de Residuos solidos 
        Elaboración de planes de gestión de residuos sólidos Municipales.*/
    
        const creatTitle = document.createElement("h2");
         creatTitle.textContent="Gestion de Residuos solidos";
         const theFirstChild =document.getElementById("popupBody").firstChild;
         document.getElementById("popupBody").insertBefore(creatTitle,theFirstChild);

         const creatTitle2 = document.createElement("h3");
         creatTitle2.textContent="Elaboración de planes de gestión de residuos sólidos Municipales";
         document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

         const texto = document.createElement("p");
         texto.textContent="Se plantea un método para minimizar la contaminación del medio ambiente, de la mano con la "
         +"protección de la salud lo cual son temas fundamentales para la sociedad actual. Nuestro propósito es colaborar"
         +"en la planificación en la gestión integral de residuos sólidos, ayudando a diagnosticar y priorizar los problemas"
         +"a los que se enfrentan, propisiando una mejora continua en los procesos; así como la optimización de recursos "
         +"disponibles con soluciones sostenibles.";
         document.getElementsByClassName("popupContent")[0].appendChild(texto);

         const creatImage = document.createElement("img");
         creatImage.src="images/clean.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

         const creatImage2 = document.createElement("img");
         creatImage2.src="images/clean2.jpg";
         document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);

        }
           
    });
}
