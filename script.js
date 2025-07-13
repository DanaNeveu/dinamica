// Agrupamos por niveles
const niveles = [
  { nombre: "1° Nivel", cursos: [1,2,3,4,5] },
  { nombre: "2° Nivel", cursos: [6,7,8,9,10,11,12] },
  { nombre: "3° Nivel", cursos: [13,14,15,16,17,18,19] },
  { nombre: "4° Nivel", cursos: [20,21,22,23,24,25] },
  { nombre: "5° Nivel", cursos: [26,27,28,29,30,31] },
  { nombre: "6° Nivel", cursos: [32,33,34,35,36,37] },
  { nombre: "7° Nivel", cursos: [38,39,40,41,42] },
  { nombre: "8° Nivel", cursos: [43,44,45,46,47,48] },
  { nombre: "9° Nivel", cursos: [49,50,51,52,53] },
  { nombre: "10° Nivel", cursos: [54,55,56,57,58,59] },
  { nombre: "11° Nivel", cursos: [60] },
];

// Cursos con prerrequisitos
const cursos = [
  { id: 1, nombre: "Ingeniería y Sociedad", requisitos: [] },
  { id: 2, nombre: "Introducción a la Química", requisitos: [] },
  { id: 3, nombre: "Habilidades Comunicativas en Ingeniería", requisitos: [] },
  { id: 4, nombre: "Precálculo I", requisitos: [] },
  { id: 5, nombre: "Introducción al Álgebra", requisitos: [] },
  { id: 6, nombre: "Precálculo II", requisitos: [4] },
  { id: 7, nombre: "Álgebra", requisitos: [5] },
  { id: 8, nombre: "Introducción al Diseño de Ingeniería", requisitos: [] },
  { id: 9, nombre: "Física I", requisitos: [6] },
  { id: 10, nombre: "Laboratorio de Ciencias", requisitos: [] },
  { id: 11, nombre: "Cálculo Diferencial", requisitos: [] },
  { id: 12, nombre: "Matemática para la Computación I", requisitos: [] },
  { id: 13, nombre: "Cálculo Multivariable", requisitos: [11] },
  { id: 14, nombre: "Matemática para la Computación II", requisitos: [12] },
  { id: 15, nombre: "Ecodiseño", requisitos: [] },
  { id: 16, nombre: "Física II", requisitos: [9, 13] },
  { id: 17, nombre: "Álgebra Lineal", requisitos: [7] },
  { id: 18, nombre: "Electivo de Ingeniería", requisitos: [] },
  { id: 19, nombre: "Taller de Programación", requisitos: [] },
  { id: 20, nombre: "Taller de Diseño de Ingeniería", requisitos: [8, 15] },
  { id: 21, nombre: "Probabilidad y Estadística para Ingeniería", requisitos: [13] },
  { id: 22, nombre: "Ecuaciones Diferenciales", requisitos: [17] },
  { id: 23, nombre: "Física III", requisitos: [13, 16] },
  { id: 24, nombre: "Estructura de Datos y Algoritmos", requisitos: [19] },
  { id: 25, nombre: "Electivo de Formación General I", requisitos: [] },
  { id: 26, nombre: "Economía y Finanzas Empresariales", requisitos: [] },
  { id: 27, nombre: "Ingeniería Electromagnética", requisitos: [23] },
  { id: 28, nombre: "Herramientas de Análisis de Señales", requisitos: [21] },
  { id: 29, nombre: "Dispositivos Semiconductores", requisitos: [22] },
  { id: 30, nombre: "Protocolos de Comunicación y Sistemas Embebidos", requisitos: [24] },
  { id: 31, nombre: "Electivo de Formación General II", requisitos: [] },
  { id: 32, nombre: "Diseño Integral de Productos", requisitos: [26] },
  { id: 33, nombre: "Electrónica Digital", requisitos: [29] },
  { id: 34, nombre: "Procesamiento Digital de Señales", requisitos: [28] },
  { id: 35, nombre: "Redes Eléctricas", requisitos: [29] },
  { id: 36, nombre: "Sistemas de Comunicaciones", requisitos: [21, 22] },
  { id: 37, nombre: "Electivo de Formación General III", requisitos: [] },
  { id: 38, nombre: "Diseño de Negocios Innovadores", requisitos: [26] },
  { id: 39, nombre: "Sistemas Digitales", requisitos: [33] },
  { id: 40, nombre: "Circuitos Electrónicos I", requisitos: [35] },
  { id: 41, nombre: "Máquinas Eléctricas", requisitos: [35] },
  { id: 42, nombre: "Comunicaciones Digitales", requisitos: [36] },
  { id: 43, nombre: "Taller de Empresas Tecnológicas", requisitos: [38] },
  { id: 44, nombre: "Estructura de Microprocesadores", requisitos: [39] },
  { id: 45, nombre: "Circuitos Electrónicos II", requisitos: [40] },
  { id: 46, nombre: "Electrónica de Potencia", requisitos: [41] },
  { id: 47, nombre: "Control Automático", requisitos: [34] },
  { id: 48, nombre: "Electivo de Formación General IV", requisitos: [] },
  { id: 49, nombre: "Diseño de Proyectos Electrónicos", requisitos: [44] },
  { id: 50, nombre: "Redes de Datos", requisitos: [42] },
  { id: 51, nombre: "Electivo de Especialidad I", requisitos: [] },
  { id: 52, nombre: "Automatización Industrial", requisitos: [47] },
  { id: 53, nombre: "Control Avanzado", requisitos: [47] },
  { id: 54, nombre: "Capstone Multidisciplinario", requisitos: [49] },
  { id: 55, nombre: "Electivo de Especialidad II", requisitos: [] },
  { id: 56, nombre: "Electivo de Especialidad III", requisitos: [] },
  { id: 57, nombre: "Electivo de Especialidad IV", requisitos: [] },
  { id: 58, nombre: "Laboratorio de Control", requisitos: [52] },
  { id: 59, nombre: "Ética Profesional", requisitos: [] },
  { id: 60, nombre: "Actividad de Titulación", requisitos: [49] },
];

let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function render() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  niveles.forEach(nivel => {
    const col = document.createElement("div");
    col.className = "nivel";
    col.innerHTML = `<h2>${nivel.nombre}</h2>`;

    nivel.cursos.forEach(id => {
      const curso = cursos.find(c => c.id === id);
      const div = document.createElement("div");
      div.className = "curso";

      const habilitado = curso.requisitos.every(req => aprobados.includes(req));
      if (habilitado) div.classList.add("activo");
      if (aprobados.includes(curso.id)) div.classList.add("aprobado");

      div.innerHTML = `<strong>${curso.nombre}</strong><small>ID: ${curso.id}</small>`;
      if (habilitado) {
        div.addEventListener("click", () => toggleAprobado(curso.id));
      }

      col.appendChild(div);
    });

    contenedor.appendChild(col);
  });
}

function toggleAprobado(id) {
  if (aprobados.includes(id)) {
    aprobados = aprobados.filter(c => c !== id);
  } else {
    aprobados.push(id);
  }
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
  render();
}

render();

