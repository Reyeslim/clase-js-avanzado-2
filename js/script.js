//  EJERCICIOS JAVASCRIPT – PLATAFORMA DE STREAMING
//  Tema: Gestión de películas, usuarios y contenido digital

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 1: For + Condicionales con Arrays Simples
//
// OBJETIVO:
// Recorrer el array con un bucle for.
// Clasificar cada duración en tres categorías: Corta (< 90), Normal (90–120), Larga (> 120).
// Llevar contadores para cada categoría y mostrarlos al final.

const duraciones = [95, 120, 45, 180, 62, 150, 88, 210, 73, 140] // duraciones de películas en minutos

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 2: For con Objetos
//
// OBJETIVO:
// Recorrer el array con for y acceder a cada propiedad del objeto.
// Mostrar solo las películas disponibles con su título, año y rating.

const peliculas = [
  {
    titulo: "Origen",
    fecha: 2010,
    genero: "Ciencia Ficción",
    rating: 8.8,
    disponible: true,
  },
  {
    titulo: "Parásitos",
    fecha: 2019,
    genero: "Drama",
    rating: 8.6,
    disponible: true,
  },
  {
    titulo: "El Faro",
    fecha: 2019,
    genero: "Terror",
    rating: 7.5,
    disponible: false,
  },
  {
    titulo: "Dune",
    fecha: 2021,
    genero: "Ciencia Ficción",
    rating: 8.0,
    disponible: true,
  },
  {
    titulo: "La Pianista",
    fecha: 2001,
    genero: "Drama",
    rating: 7.2,
    disponible: false,
  },
  {
    titulo: "Midsommar",
    fecha: 2019,
    genero: "Terror",
    rating: 7.1,
    disponible: true,
  },
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 3: forEach – Recorrer Arrays
//
// OBJETIVO:
// Mostrar un listado numerado de géneros con forEach.
// Filtrar e imprimir solo las películas disponibles usando forEach sobre peliculas.

const generos = [
  "Acción",
  "Drama",
  "Comedia",
  "Terror",
  "Ciencia Ficción",
  "Documental",
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 4: map – Transformar Arrays
//
// OBJETIVO:
// Extraer solo los títulos y solo los ratings de peliculas.
// Añadir una propiedad 'clasificacion' a cada película según su rating.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 5: filter – Filtrar Arrays
//
// OBJETIVO:
// Filtrar películas disponibles.
// Filtrar por rating ≥ 8, por género, por año.
// Filtrar el array de duraciones.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 6: Combinar filter + map
//
// OBJETIVO:
// Obtener los títulos de películas disponibles con rating ≥ 8.
// Obtener las películas de Terror con título y rating.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 7: find, some, every

const usuarios = [
  { nombre: "Sofía", plan: "Premium", activo: true, peliculasVistas: 42 },
  { nombre: "Miguel", plan: "Básico", activo: true, peliculasVistas: 15 },
  { nombre: "Carmen", plan: "Premium", activo: false, peliculasVistas: 78 },
  { nombre: "Daniel", plan: "Básico", activo: true, peliculasVistas: 3 },
  { nombre: "Lucía", plan: "Premium", activo: true, peliculasVistas: 61 },
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 8: reduce – Reducir un array a un unico valor
//
// OBJETIVO:
// Sumar el total de películas vistas.
// Contar usuarios Premium.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 9: Arrow Functions en Diferentes Formas

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 10: Ejercicio Completo Integrador

const canciones = [
  {
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    genero: "Pop",
    duracion: 200,
    reproducciones: 3800000,
    enPlaylist: true,
  },
  {
    titulo: "Levitating",
    artista: "Dua Lipa",
    genero: "Pop",
    duracion: 203,
    reproducciones: 2100000,
    enPlaylist: true,
  },
  {
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    genero: "Rock",
    duracion: 354,
    reproducciones: 1700000,
    enPlaylist: false,
  },
  {
    titulo: "Bad Guy",
    artista: "Billie Eilish",
    genero: "Alternativo",
    duracion: 194,
    reproducciones: 2900000,
    enPlaylist: true,
  },
  {
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    genero: "Pop",
    duracion: 234,
    reproducciones: 4400000,
    enPlaylist: false,
  },
  {
    titulo: "Lose Yourself",
    artista: "Eminem",
    genero: "Hip-Hop",
    duracion: 326,
    reproducciones: 1200000,
    enPlaylist: true,
  },
  {
    titulo: "Stay",
    artista: "The Kid LAROI",
    genero: "Pop",
    duracion: 141,
    reproducciones: 3200000,
    enPlaylist: true,
  },
]
