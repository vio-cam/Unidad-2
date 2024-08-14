let texto = "";
for(let i = 1;i<=5; i++){
    texto += i + "<br>";
}

document.getElementById("demo").innerHTML = texto;



let carros="";
let cars=["BMW","Volvo","Saab","Fiat","Audi"];

for(let c=0; c<cars.length; c++){
    carros = carros + "<li>"+ cars[c] + "</li>";
}

document.getElementById("cars-list").innerHTML = carros;

//gallery


let gallery="";
const imagenes=[
    "https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991781485.jpg",
    "https://www.img2go.com/assets/img/landing_page/upscale_mobile_before@2x.jpg",
    "https://aguacatec.es/wp-content/uploads/2023/10/e5a978b8-6772-4c85-a50e-15581af7d483.png"
]
for(let i=0; i<imagenes.length; i++){
    gallery = gallery + "<img src='" + imagenes[i] + "' alt='imagen" + (i+1)+"' >";
}

document.getElementById("gallery").innerHTML = gallery;