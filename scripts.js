// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const integrantes = [
    {
      nombre: "Integrante 1",
      descripcion: "Descripción breve del integrante 1.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s",
    },
    {
      nombre: "Integrante 2",
      descripcion: "Descripción breve del integrante 2.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s",
    },
    {
      nombre: "Integrante 3",
      descripcion: "Descripción breve del integrante 1.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s",
    },
    {
      nombre: "Integrante 4",
      descripcion: "Descripción breve del integrante 2.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s",
    },
    {
      nombre: "Integrante 5",
      descripcion: "Descripción breve del integrante 1.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s",
    },
    {
      nombre: "Integrante 6",
      descripcion: "Descripción breve del integrante 2.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s",
    },
    {
      nombre: "Integrante 7",
      descripcion: "Descripción breve del integrante 1.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZsINAeXhg_aONZrbZrMTZEjopaRJ1xmlVA&s",
    },
    {
      nombre: "Integrante 8",
      descripcion: "Descripción breve del integrante 2.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s",
    },
  ];

  const cardContainer = document.getElementById("card-container");

  integrantes.forEach((integrante) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = integrante.imagen;
    img.alt = `Foto de ${integrante.nombre}`;
    img.className = "card-img";

    const nombre = document.createElement("h3");
    nombre.textContent = integrante.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = integrante.descripcion;

    card.appendChild(img);
    card.appendChild(nombre);
    card.appendChild(descripcion);

    cardContainer.appendChild(card);
  });
});
