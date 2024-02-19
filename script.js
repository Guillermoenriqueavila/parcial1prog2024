const boton_lectura = document.getElementById("horas_lectura");
const label_lectura = document.getElementById("n_horas_hechas");
let contador = 0;
boton_lectura.addEventListener("click",()=>{
    contador +=1;
    label_lectura.innerHTML="¡Tienes "+contador+" horas de lectura!";
    if(contador > 10){
        contador_diabetes = contador -10
        label_lectura.innerHTML ="¡Tienes muchos conocimientos, te felicito! y "+contador +" horas de lectura"
    }
})