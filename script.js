var ingredientes_opcion1 = ['Fresa', 'chicle','Limon', 'Piña', 'Mora', 'Grageas', 'Hielo'];
var ingredientes_opcion2 = ['Leche', 'Fresa','Hielo', 'Dulce de fresa', 'Grageas'];
var ingredientes_opcion3 = ['Leche', 'Mora','Hielo', 'Dulce de Mora', 'Grageas'];
var ingredientes_opcion4 = ['Leche', 'Cocoa','Hielo', 'Nutella', 'Grageas de chocolate'];

function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==1){
        nombre.innerHTML = "Granizado Arcoiris"
        descripcion.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sunt quas officia sapiente? Velit.";
        fotoPrincipal.src = "img/ft1.png";
        circulo.style.backgroundColor = "#f88965";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion1.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = "Granizado de Fresa"
        descripcion.innerHTML = "At architecto id, quia, saepe non cum sapiente, est aut aspernatur perferendis dignissimos unde!";
        fotoPrincipal.src = "img/ft2.png";
        circulo.style.backgroundColor = "#f1c072";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion2.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Granizado de Mora"
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit tempora pariatur ad, vero facilis ex,laboriosam illum?";
        fotoPrincipal.src = "img/ft3.png";
        circulo.style.backgroundColor = "#d46475";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion3.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Granizado de Chocolate"
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit tempora";
        fotoPrincipal.src = "img/ft4.png";
        circulo.style.backgroundColor = "#398969";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    
}