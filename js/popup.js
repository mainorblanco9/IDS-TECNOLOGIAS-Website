
/* ============ Oculta con la tecla Esc la ventana popup =================*/
function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
        $('#popup').hide();
    }
    //moverseA("Servicios-ambiente");
});
window.onload = function () {//Quita el popup al recargar la pagina y tambien el
    //la regresa al principio del sitio
    $('#popup').hide();
    location.hash = "#top";
}

/* ============ fin de ocultar ventana popup  =================*/

/* ============ Oculta la ventana popup desde el boton x  =================*/
let cerrarPopup = popup => {
    document.getElementById(popup).style.display = "none";
}

/* ============ Oculta la ventana popup desde el boton x  =================*/
const cleanDiv = () => {

    const padre = document.querySelector("#popupBody");
    padre.removeChild(document.querySelector("#popupBody h2"));
    document.querySelector(".popupContent").innerHTML = "";
}
/* Para agregar la info a los popup */
function ssShowPopup() {

    /* Mostrar de nueva popup */
    $('#popup').show();
    /* ======================*/
    $('#Servicios-ambiente').one("click", function (e) {

        if (!!document.querySelector("#popupBody h2")) cleanDiv(); //si ya se creo contenido antes lo borramos
        let id = e.target.id;

        if (id === "card_GestionResiduoSolidos") {/*Si se selecciona Gestion de Residuos solidos 
         Programas institucionales en el manejo de Residuos Sólidos*/
            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Gestion de Residuos solidos";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Programas institucionales en el"
                + " manejo de Residuos Sólidos";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/RESIDUOSESPECIALES.jpg";
            creatImage.alt = "Residuos solidos";
            creatImage.id = "img-left";
            creatImage.style.width = "200px";
            creatImage.style.height = "auto";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);


            const texto = document.createElement("p");
            texto.textContent = "Enfocado en el reconocimiento en la"
                + " variedad de residuos solidos existentes en cada establecimiento o por áreas funcionales, articulando una"
                + " serie de líneas que minimicen los impactos ambientales e impulsando una variedad de instrumentos bajo la"
                + " legislación vigente, se destacan:";
            document.getElementsByClassName("popupContent")[0].appendChild(texto)

            const creatImage2 = document.createElement("img");
            creatImage2.src = "images/Biohazard-cleanup.jpg";
            creatImage2.id = "img-right";
            creatImage2.className = "ajustarCentro";
            creatImage2.style.width = "200px";
            creatImage2.style.height = "auto";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);


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


        } else if (id === "card_GestionResiduoSolidos2") {/*Si se selecciona Gestion de Residuos solidos 
         Asesoría en la gestión de residuos peligrosos y especiales*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Gestion de Residuos solidos";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Asesoría en la gestión de residuos peligrosos y especiales";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const texto = document.createElement("p");
            texto.textContent = "Se propondrá un programa mediante capacitaciónes especializadas con procedimientos"
                + "y recomendaciones al personal en el manejo de residuos peligrosos o especiales de acuerdo al análisis"
                + "de cada establecimiento, para conocer las propiedades fisico-químicas de las sustancias que se estan"
                + " manipulando, con el fin de evitar accidentes y daños ambientales.";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

        } else if (id === "card_GestionResiduoSolidos3") {/*Si se selecciona Gestion de Residuos solidos 
        Análisis de volúmenes de generación y caracterización de Residuos sólidos*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Gestion de Residuos solidos";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Análisis de volúmenes de generación y caracterización de Residuos sólidos";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);
            const creatImage2 = document.createElement("img");
            creatImage2.src = "images/tendencias-de-la-mercadotecnia.jpg";
            creatImage2.id = "img-right";
            creatImage2.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/barrerCalle.jpg";
            creatImage.id = "img-left";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Delimitando un área (comunidad o cantón) o eligiendo una institución para estudio,"
                + "se determina la tasa de generación promedio ponderada de residuos, dando como resultado los kg/hab-día."
                + "Es importante hacer énfasis en que se puede demostrar que existen diferencias significativas en la composición"
                + "de residuos sólidos para los sectores comerciales y residenciales, principalmente en materiales orgánicos, papel,"
                + "cartón y plástico.";
            texto.style.clear = "both";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);


        } else if (id === "card_GestionResiduoSolidos4") {/*Si se selecciona Gestion de Residuos solidos 
        Elaboración de planes de gestión de residuos sólidos Municipales.*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Gestion de Residuos solidos";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Elaboración de planes de gestión de residuos sólidos Municipales";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const texto = document.createElement("p");
            texto.textContent = "Se plantea un método para minimizar la contaminación del medio ambiente, de la mano con la "
                + "protección de la salud lo cual son temas fundamentales para la sociedad actual. Nuestro propósito es colaborar"
                + "en la planificación en la gestión integral de residuos sólidos, ayudando a diagnosticar y priorizar los problemas"
                + "a los que se enfrentan, propisiando una mejora continua en los procesos; así como la optimización de recursos "
                + "disponibles con soluciones sostenibles.";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            const creatImage = document.createElement("img");
            creatImage.src = "images/clean.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const creatImage2 = document.createElement("img");
            creatImage2.src = "images/clean2.jpg";
            creatImage2.id = "img-right";
            creatImage2.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);

        } else if (id === "card_EducacionAmbiental") {/*Educacion Ambiental / Tramitologia Ambiental*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Educacion Ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Tramitologia Ambiental";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/tramitologiaAmbiental.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Capacitacion a personal de instituciones con el fin de desarrollar actitudes, valores, "
                + "destrezas y habilidades ,desde un contexto de responsabilidad,concientización y prevención de los impactos"
                + "negativos al ambiente, enfocado en los siguientes temas:";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Manejo de residuos solidos y liquidos");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Identificación de impactos Ambientales");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Reconocer tecnologías con eficiencia energética");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Programa de Bandera Azul.");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Carbono neutralidad");
            li5.appendChild(li5Texto);

            let li6 = document.createElement("li");
            let li6Texto = document.createTextNode("Ahorro energético y uso de energías limpias.");
            li6.appendChild(li6Texto);

            let li7 = document.createElement("li");
            let li7Texto = document.createTextNode("Uso racional de los recursos naturales");
            li7.appendChild(li7Texto);

            let li8 = document.createElement("li");
            let li8Texto = document.createTextNode("Adaptacion al cambio climático");
            li8.appendChild(li8Texto);

            let li9 = document.createElement("li");
            let li9Texto = document.createTextNode("Pago por servicios ambientales.");
            li9.appendChild(li9Texto);

            let li10 = document.createElement("li");
            let li10Texto = document.createTextNode("Construcción de jardines eco amigables con el ambiente (espacios compartidos)");
            li10.appendChild(li10Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            ul.appendChild(li8);
            ul.appendChild(li9);
            ul.appendChild(li10);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

        } else if (id === "Tramitologia ambiental") {/*Tramitologia Ambiental  / Ministerio de Salud*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Tramitologia Ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Ministerio de Salud";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/Ministerio de Salud.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Como ente regulador, apoyamos a nuestros clientes desde lo que establece "
                + "la administración publica en la ejecución de tramites para diferentes proyectos,"
                + "simplificando y agilizando el proceso , "
                + "mejorando la eficacia reduciendo gastos operativos,"
                + "gestionando los siguientes permisos o certificados:";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Reportes operacionales");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Permisos de descarga de aguas pluviales y residuales");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Permiso de Transporte, almacenamiento, y comercialización de combustible (dirección de hidrocarburos)");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Permisos de ubicación de plantas de tratamiento ");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Auditorias de los sistemas de tratamiento de aguas residuales ");
            li5.appendChild(li5Texto);

            let li6 = document.createElement("li");
            let li6Texto = document.createTextNode("Muestreo de aguas residuales y su respetivo analisis");
            li6.appendChild(li6Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

        } else if (id === "Tramitologia ambiental2") {/*Tramitologia Ambiental  / Secretaria Técnica Nacional (SETENA)*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Tramitologia Ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Secretaria Técnica Nacional (SETENA)";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/setena.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Como encargada en CR de regular las actividades que causen algún impacto en el medio "
                + "ambiente , con carácter de obligatoriedad que los proyectos esten alineados en el marco de desarrollo "
                + "sostenible. IDS & Tecnologías S.A brinda este servicio garantizando que su proyecto cumpla con los " +
                +"requisitos solicitados de acuerdo a cada actividad y nombrados a continuación: ";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Viabilidades Ambientales");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Formulario D1");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Formulario D2");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Planes de Gestión Ambiental");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Estudios de diagnósticos Ambientales");
            li5.appendChild(li5Texto);

            let li6 = document.createElement("li");
            let li6Texto = document.createTextNode("Pronósticos planes de gestión ambiental P-PGA");
            li6.appendChild(li6Texto);

            let li7 = document.createElement("li");
            let li7Texto = document.createTextNode("Declaraciones juradas de compromisos ambientales");
            li7.appendChild(li7Texto);

            let li8 = document.createElement("li");
            let li8Texto = document.createTextNode("Regencias Ambientales");
            li8.appendChild(li8Texto);

            let li9 = document.createElement("li");
            let li9Texto = document.createTextNode("Seguimiento de expedientes para obtener viabilidad");
            li9.appendChild(li9Texto);

            let li10 = document.createElement("li");
            let li10Texto = document.createTextNode("Recursos de revocatoria");
            li10.appendChild(li10Texto);

            let li11 = document.createElement("li");
            let li11Texto = document.createTextNode("Seguimiento de denuncias");
            li11.appendChild(li11Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            ul.appendChild(li8);
            ul.appendChild(li9);
            ul.appendChild(li10);
            ul.appendChild(li11);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);
        } else if (id === "Tramitologia ambiental3") {/*Tramitologia Ambiental  / Dirección De Aguas*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Tramitologia Ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = "Dirección De Aguas";
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/Direccion de aguas.png";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Le brindamos servicios orientados a gestionar y proteger el recurso hídrico. Lo cual es "
                + "una tramitología desde Ministerio de Ambiente y Energía (MINAE), a través de  La Direccion de Aguas con los"
                + " siguientes tramites:";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Permisos de descarga de aguas de drenajes agrícolas");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Permisos de obras en cause");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Formulario D2");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Permisos de perforación de pozos");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Trámites de concesiones de aguas");
            li5.appendChild(li5Texto);

            let li6 = document.createElement("li");
            let li6Texto = document.createTextNode("Pronunciamientos sobre corrientes de agua");
            li6.appendChild(li6Texto);

            let li7 = document.createElement("li");
            let li7Texto = document.createTextNode("Permisos de vertidos");
            li7.appendChild(li7Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

        } else if (id === "Certificado de calidad ambiental") {/*Certificado de calidad ambiental
      Carbono Neutralidad
      Emisiones de GEI -Reducciones o remociones internas -Compensacion externa = 0 */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Certificado de calidad ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `Carbono Neutralidad`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage2 = document.createElement("img");
            creatImage2.src = "images/Picture30.jpg";
            creatImage2.id = "img-left";
            creatImage2.style.height="300px";
            creatImage2.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);

            const texto = document.createElement("p");
            texto.textContent = "Se determina el potencial impacto en el calentamiento global que se genera en la"
                + "comercialización de productos. Es importante saber que  los gases de efecto invernadero (GEI), "
                + "son todos aquellos que modifican los patrones de eliminación de radiación emitida desde la superficie "
                + "de la tierra hacia el espacio los de mayor importancia son:";

            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Dióxido de Carbono (CO2)");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Metano (CH4)");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Óxido de Nitroso(N2O)");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Hidrofluorocarbonos (HFC)");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Perfluorocarbonos (PFC)");
            li5.appendChild(li5Texto);

            let li6 = document.createElement("li");
            let li6Texto = document.createTextNode("Hexafluoruro de azufre(SF6)");
            li6.appendChild(li6Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

            const creatImage = document.createElement("img");
            creatImage.src = "images/carbononeutral.jpg";
            creatImage.id = "img-right";
            creatImage.className = "ajustarCentro";
            creatImage.style.marginTop = "1em";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto2 = document.createElement("p");
            texto2.textContent = "Se requiere de la estimación precisa de la huella de carbono del producto, "
                + "(proceso y actividad), así como de la realización de acciones internas o externas para disminuir "
                + "esta huella haciendo cumplir la siguiente ecuación.";
            texto2.style.marginTop = "1em";
            document.getElementsByClassName("popupContent")[0].appendChild(texto2);

            const creatP = document.createElement("p");
            creatP.id = "formula";
            document.getElementsByClassName("popupContent")[0].appendChild(creatP);
            const creatTextResal = document.createElement("strong");
            creatTextResal.textContent = `Emisiones de GEI -Reducciones o remociones internas -Compensacion externa = 0`;
            document.querySelector(".popupContent #formula").appendChild(creatTextResal);

        } else if (id === "Certificado de calidad ambiental2") {/*Certificado de calidad ambiental
        Bandera Azul Ecológica */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Certificado de calidad ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `Bandera Azul Ecológica`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/BANDERA AZUL.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "El galardón o distintivo de Bandera Azul Ecológica es uno de los objetivos que su "
                + "empresa podrá conseguir con la asesoría de IDS & Tecnologias S.A , lo cual seria un premio al esfuerzo"
                + " y el trabajo voluntario en la búsqueda de la sostenibilidad, siempre enfocados en la protección de los "
                + "recursos naturales, propiciando un ambiente sano y ecológicamente equilibrado.";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

        } else if (id === "Certificado de calidad ambiental3") {/*Certificado de calidad ambiental
    Pago por servicios ambientales */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Certificado de calidad ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `Pago por servicios ambientales`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/Pago por servicios ambientales.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Consiste en un insentivo monetario a los usuarios de suelos, de manera que al darle un "
                + "buen uso a los mismos adoptando prácticas responsables (captación de carbono en siembra de árboles), "
                + "puedan ofrecer un servicio ambiental ,ya que ecológicamente benefician a la sociedad en general. "
                + "Se puede llevar a cobo bajo cinco rasgos distintivos, para IDS & Tecnologias S.A. será un gusto brindar "
                + "acompañamiento y asesoría para optar por este gran istrumento eonomico.";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

        } else if (id === "Certificado de calidad ambiental4") {/*Certificado de calidad ambiental
        ISO 14001 */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Certificado de calidad ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `ISO 14001`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/iso.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "La gestión medioambiental en las operaciones de cualquier empresa, será una herramienta "
                + "para lograr un éxito sustentable.  Con la implementación de esta norma que es una estandarización "
                + "internacional en sus procesos, les ayudará a reducir los impactos negativos al ambiente ,asi como permitir"
                + " el crecimiento de su organización y mantenerse exitosa en el tiempo, logrando los siguientes beneficios:";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Reducir el desperdicio y el uso de la energía");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Disminuir costos de operación en su organización");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Oportunidades de negocio con una visión de responsabilidad ambiental");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Confiabilidad de los clientes por el compromiso con la legislación vigente");
            li4.appendChild(li4Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

        }
        else if (id === "Certificado de calidad ambiental5") {/*Certificado de calidad ambiental
        Eficiencia energética */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Certificado de calidad ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `Eficiencia energética`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/eficiencia-energetica.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "El consumo anual de las diferentes empresas, en la gran moyoria de los casos son posibles "
                + "de reducir, en este sentido IDS & Tecnologias S. A ,le puede asesorar para conseguir un "
                + "certificado mediante la medición energética en las condiciones normales de funcionamiento de "
                + "su edificio ,desde diferentes variables como: Calentadores de agua,calefacción, "
                + "aires acondicionados,iluminación, refrigeración, entre otros.";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);


        } else if (id === "Certificado de calidad ambiental6") {/*Certificado de calidad ambiental
        Ecoeficiencia empresarial */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Certificado de calidad ambiental";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `Ecoeficiencia empresarial`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const creatImage = document.createElement("img");
            creatImage.src = "images/eficiencia.jpg";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const texto = document.createElement("p");
            texto.textContent = "Como estrategia o método de optimización en el uso de la energía,insumos,y "
                + "procesos industriales, la empresa IDS & Tecnologias S. A, les ofrece la orientación, "
                + "para que en su organización pueda contar con el certificado de ecoeficiencia, "
                + "logrando alcanzar los siguientes beneficios:";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Reducir costos de operación.");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Minimizar la emisión de contaminantes al ambiente.");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Obtener ingresos con el reciclaje y la reutilización de residuos.");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Gozar de prestigio entre distribuidores y clientela.");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Mantener un ambiente laboral agradable.");
            li5.appendChild(li5Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

        } else if (id === "Ventas de Productos ambientales") {/*Ventas de Productos ambientales
        Tratamiento de agua potable y residuales (comercial,industrial y residencial */

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Ventas de Productos ambientales";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            const creatTitle2 = document.createElement("h3");
            creatTitle2.textContent = `Tratamiento de agua potable y residuales (comercial,industrial y residencial)`;
            document.getElementsByClassName("popupContent")[0].appendChild(creatTitle2);

            const texto = document.createElement("p");
            texto.textContent = "Comercializamos plantas de tratamiento de aguas residuales industriales con el objetivo de "
                + "obtener los mejores resultados posibles, tanto medioambientales como económicos. Ofrecemos soluciones llaves"
                + " en mano en la instalación de plantas para la purificación de aguas de proceso, es decir, aguas que necesitan"
                + " ser tratadas antes de ser incorporadas a procesos productivos. Contamos con las mejores tecnologías disponibles"
                + " para la adecuación de las aguas residuales generadas en los procesos industriales a los límites de vertido establecidos"
                + " por leyes actuales.";
            document.getElementsByClassName("popupContent")[0].appendChild(texto);

            const creatImage = document.createElement("img");
            creatImage.src = "images/tratamientoAguas1.png";
            creatImage.id = "img-left";
            creatImage.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage);

            const creatImage2 = document.createElement("img");
            creatImage2.src = "images/tratamientoAguas.png";
            creatImage2.id = "img-right";
            creatImage2.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage2);


            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Bombeo y trasiego de agua");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Filtración de sedimentos ");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Filtración de otros contaminantes");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Intercambio iónico y desionización ");
            li4.appendChild(li4Texto);

            let li5 = document.createElement("li");
            let li5Texto = document.createTextNode("Osmosis inversa, nano y ultraﬁltración");
            li5.appendChild(li5Texto);

            let li6 = document.createElement("li");
            let li6Texto = document.createTextNode("Tecnología con lámparas UV");
            li6.appendChild(li6Texto);

            let li7 = document.createElement("li");
            let li7Texto = document.createTextNode("Generadores de ozono y ClO2");
            li7.appendChild(li7Texto);

            let li8 = document.createElement("li");
            let li8Texto = document.createTextNode("Control y monitoreo en línea");
            li8.appendChild(li8Texto);

            let li9 = document.createElement("li");
            let li9Texto = document.createTextNode("Equipos de tratamiento de aguas ");
            li9.appendChild(li9Texto);

            let li10 = document.createElement("li");
            let li10Texto = document.createTextNode("Equipos de dosiﬁcación  ");
            li10.appendChild(li10Texto);

            let li11 = document.createElement("li");
            let li11Texto = document.createTextNode("Calderas y calentadores de agua");
            li11.appendChild(li11Texto);

            let li12 = document.createElement("li");
            let li12Texto = document.createTextNode("Torres de enfriamiento");
            li12.appendChild(li12Texto);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            ul.appendChild(li8);
            ul.appendChild(li9);
            ul.appendChild(li10);
            ul.appendChild(li11);
            ul.appendChild(li12);

            document.getElementsByClassName("popupContent")[0].appendChild(ul);

            const creatImage3 = document.createElement("img");
            creatImage3.src = "images/Picture25.png";
            creatImage3.id = "img-left";
            creatImage3.style.marginTop="1.2em";
            creatImage3.className = "ajustarCentro";
            document.getElementsByClassName("popupContent")[0].appendChild(creatImage3);

        } else if (id === "Ventas de Productos ambientales2") {/*Ventas de Productos ambientales*/

            const creatTitle = document.createElement("h2");
            creatTitle.textContent = "Ventas de Productos ambientales";
            const theFirstChild = document.getElementById("popupBody").firstChild;
            document.getElementById("popupBody").insertBefore(creatTitle, theFirstChild);

            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode("Equipo de prevención y contención de derrames de sustancias peligrosas");
            li1.appendChild(li1Texto);

            let li2 = document.createElement("li");
            let li2Texto = document.createTextNode("Productos de limpieza");
            li2.appendChild(li2Texto);

            let li3 = document.createElement("li");
            let li3Texto = document.createTextNode("Recipientes o contenedores para residuos sólidos según la estrategia nacional.");
            li3.appendChild(li3Texto);

            let li4 = document.createElement("li");
            let li4Texto = document.createTextNode("Tratamiento de agua potable y residuales (comercial,industrial y residencial)");
            li4.appendChild(li4Texto);


            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.style.marginTop ="2em";
            document.getElementsByClassName("popupContent")[0].appendChild(ul);
        }

    });
}
