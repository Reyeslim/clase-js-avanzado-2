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

let cortas = 0
let normales = 0
let largas = 0

// for (let i = 0; i < duraciones.length; i++) {
//   if (duraciones[i] < 90) {
//     cortas++
//     console.log(`${duraciones[i]} min es una película corta`)
//   } else if (duraciones[i] <= 120) {
//     normales++
//     console.log(`${duraciones[i]} min es una película normal`)
//   } else {
//     largas++
//     console.log(`${duraciones[i]} min es una película larga`)
//   }
// }

// console.log(
//   `Resumen: Cortas: ${cortas} | Normales: ${normales} | Largas: ${largas}`,
// )

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

// console.log("\n--- Catálogo de películas ---")
// for (let i = 0; i < peliculas.length; i++) {
//   const pelicula = peliculas[i]
//   if (pelicula.disponible) {
//     console.log(
//       `${pelicula.fecha} ${pelicula.titulo} (${pelicula.genero}) - ${pelicula.rating}`,
//     )
//   } else {
//     console.log(`[${pelicula.fecha}] ${pelicula.titulo} - No disponible`)
//   }
// }

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

// console.log("\n --- Géneros disponibles ---")

// generos.forEach((genero, indice) => {
//   console.log(`${indice + 1}. ${genero}`)
// })

// console.log("\n --- Películas disponibles ---")

// peliculas.forEach((pelicula) => {
//   if (pelicula.disponible) {
//     console.log(`${pelicula.titulo} (${pelicula.fecha})`)
//   }
// })
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 4: map – Transformar Arrays
//
// OBJETIVO:
// Extraer solo los títulos y solo los ratings de peliculas.
// Añadir una propiedad 'clasificacion' a cada película según su rating.

// const titulos = peliculas.map((pelicula) => pelicula.titulo).join(" ")
// console.log(`\nTítulos: ${titulos}`)

// const ratings = peliculas.map((pelicula) => pelicula.rating).join(" ")
// console.log(`\nRatings: ${ratings}`)

// const peliculasClasificadas = peliculas.map((pelicula) => {
//   let clasificacion
//   if (pelicula.rating >= 8.5) {
//     clasificacion = "Obra maestra"
//   } else if (pelicula.rating >= 7.5) {
//     clasificacion = "Muy buena"
//   } else {
//     clasificacion = "Buena"
//   }
//   return {
//     titulo: pelicula.titulo,
//     rating: pelicula.rating,
//     clasificacion,
//   }
// })

// console.log("Películas clasificadas")
// peliculasClasificadas.forEach((peliculaClasificada) => {
//   console.log(
//     `${peliculaClasificada.clasificacion} - ${peliculaClasificada.titulo} (${peliculaClasificada.rating})`,
//   )
// })

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 5: filter – Filtrar Arrays
//
// OBJETIVO:
// Filtrar películas disponibles.
// Filtrar por rating ≥ 8, por género, por año.
// Filtrar el array de duraciones.

// const disponibles = peliculas.filter((pelicula) => pelicula.disponible)
// console.log(`Películas disponibles`, disponibles.length, "películas")

// const muyBienValoradas = peliculas.filter((pelicula) => pelicula.rating >= 8)
// console.log(
//   `Con rating >= 8: ${muyBienValoradas.map((pelicula) => pelicula.titulo)}`,
// )

// const terror = peliculas.filter((pelicula) => pelicula.genero === "Terror")
// console.log(`Terror: ${terror.map((pelicula) => pelicula.titulo)}`)

// const recientes = peliculas.filter((pelicula) => pelicula.fecha > 2015)
// console.log(
//   `Posteriores a 2015: ${recientes.map((pelicula) => pelicula.titulo)}`,
// )
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 6: Combinar filter + map
//
// OBJETIVO:
// Obtener los títulos de películas disponibles con rating ≥ 8.
// Obtener las películas de Terror con título y rating.

// const titulosPuntuacionMayor8 = peliculas
//   .filter((pelicula) => pelicula.disponible && pelicula.rating >= 8)
//   .map((pelicula) => pelicula.titulo)
// console.log(peliculas)
// console.log("Mayores de 8:", titulosPuntuacionMayor8)

// const ratingsTerror = peliculas
//   .filter((pelicula) => pelicula.genero === "Terror")
//   .map((pelicula) => ({
//     titulo: pelicula.titulo,
//     rating: pelicula.rating,
//   }))

// console.log("Películas de terror", ratingsTerror)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 7: find, some, every

const usuarios = [
  { nombre: "Sofía", plan: "Premium", activo: true, peliculasVistas: 42 },
  { nombre: "Miguel", plan: "Básico", activo: true, peliculasVistas: 15 },
  { nombre: "Carmen", plan: "Premium", activo: false, peliculasVistas: 78 },
  { nombre: "Daniel", plan: "Básico", activo: true, peliculasVistas: 3 },
  { nombre: "Lucía", plan: "Premium", activo: true, peliculasVistas: 61 },
]

// find - primer usuario activo premium
// const primerPremium = usuarios.find(
//   (usuario) => usuario.plan === "Premium" && usuario.activo,
// )
// console.log("Primer usuario premium activo:", primerPremium.nombre)

// // find - buscar usuario que no existe

// const usuarioInexistente = usuarios.find(
//   (usuario) => usuario.peliculasVistas > 100,
// )
// console.log("Usuario con más de 100 pelis vistas:", usuarioInexistente)

// // some  - ¿hay algún usuario inactivo?

// const hayInactivos = usuarios.some((usuario) => !usuario.activo)
// console.log("¿Hay usuarios inactivos?", hayInactivos)

// // some - ¿hay algún usuario que ha visto más de 50 pelis?

// const masDe50Pelis = usuarios.some((usuario) => usuario.peliculasVistas > 50)
// console.log("¿Algún usuario ha visto más de 50 pelis?", masDe50Pelis)

// // every - ¿todos los usuarios tienen alguna pelicula vista?
// const todosHanVistoPelis = usuarios.every(
//   (usuario) => usuario.peliculasVistas > 0,
// )
// console.log("¿Todos han visto al menos 1 peli?", todosHanVistoPelis)

// // every - ¿todos son premium?
// const todosPremium = usuarios.every((usuario) => usuario.plan === "Premium")
// console.log("¿Son todos premium?", todosPremium)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 8: reduce – Reducir un array a un unico valor
//
// OBJETIVO:
// Sumar el total de películas vistas.
// Contar usuarios Premium.

// const totalVistas = usuarios.reduce((suma, usuario) => {
//   return suma + usuario.peliculasVistas
// }, 0)

// console.log("Total peliculas vistas de todos los usuarios:", totalVistas)

// const totalPremium = usuarios.reduce((contador, usuario) => {
//   return usuario.plan === "Premium" ? contador + 1 : contador
// }, 0)

// console.log("Usuarios premium:", totalPremium)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EJERCICIO 9: Arrow Functions en Diferentes Formas

// Forma 1: Sin parámetros / Argumentos
const obtenerFecha = () => new Date().getFullYear()
console.log("Año actual:", obtenerFecha())

// Forma 2: Con 1 parámetro y return implícito
const limpiarTexto = (texto) => texto.trim().toUpperCase()
console.log(limpiarTexto("               Origen             "))

// Forma 3: varios parámetros
const calcularProgresoVisualizacion = (visto, total) =>
  ((visto / total) * 100).toFixed(0) + "%"

console.log("Progreso de la serie:", calcularProgresoVisualizacion(4, 10))

// Forma 4: cuerpo con varias líneas

const clasificarPelis = (nota) => {
  if (nota >= 9) return "Obra maestra"
  if (nota >= 7) return "Recomendada"

  return "Para pasar el rato"
}

console.log("Rating 8.5:", clasificarPelis(8.5))

// Forma 5: Retornar objeto

const crearTarjeta = (titulo, rating) => ({
  titulo,
  rating,
  clasificacion: clasificarPelis(rating),
})

console.log("Tarjeta creada:", crearTarjeta("Origen", 8.5))

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

console.log("\n======= PLATAFORMA DE MÚSICA =======\n")

// 1. forEach – mostrar el catálogo completo
console.log("1. CATÁLOGO COMPLETO:")
canciones.forEach((cancion, i) => {
  console.log(
    `   ${i + 1}. "${cancion.titulo}" – ${cancion.artista} (${cancion.genero})`,
  )
})

// 2. filter – canciones de Pop en la playlist
const popEnPlaylist = canciones.filter(
  (c) => c.genero === "Pop" && c.enPlaylist,
)
console.log(`\n2. Pop en playlist (${popEnPlaylist.length} canciones):`)
popEnPlaylist.forEach((c) => console.log(`   🎵 ${c.titulo}`))

// 3. map – convertir duraciones de segundos a mm:ss
const conDuracionFormato = canciones.map((c) => {
  const min = Math.floor(c.duracion / 60)
  // padStart solo con strings. Longitud todal, relleno
  const seg = (c.duracion % 60).toString().padStart(2, "0") // modulo para ver cuanto sobra de los segundos
  return { titulo: c.titulo, duracion: `${min}:${seg}` }
})
console.log("\n3. Duraciones formateadas:")
conDuracionFormato.forEach((c) => console.log(`   ${c.titulo}: ${c.duracion}`))

// 4. filter + map – artistas únicos de canciones muy escuchadas (> 2M)
const artistasTop = canciones
  .filter((c) => c.reproducciones > 2000000)
  .map((c) => c.artista)
console.log("\n4. Artistas con > 2M reproducciones:", artistasTop)

// 5. reduce – duración total de la playlist en minutos
const duracionTotal = canciones
  .filter((c) => c.enPlaylist)
  .reduce((suma, c) => suma + c.duracion, 0)
const minutos = Math.floor(duracionTotal / 60)
const segundos = duracionTotal % 60
console.log(`\n5. Duración total de la playlist: ${minutos}m ${segundos}s`)

// 6. find – buscar una canción por título
const buscarCancion = (titulo) =>
  canciones.find((c) => c.titulo.toLowerCase() === titulo.toLowerCase())
const encontrada = buscarCancion("bad guy")
console.log(
  "\n6. Búsqueda 'bad guy':",
  encontrada ? `✅ Encontrada (${encontrada.artista})` : "❌ No encontrada",
)

// 7. some / every
const hayHipHop = canciones.some((c) => c.genero === "Hip-Hop")
const todasEscuchadas = canciones.every((c) => c.reproducciones > 0)
console.log("\n7. ¿Hay Hip-Hop?", hayHipHop)
console.log("   ¿Todas tienen reproducciones?", todasEscuchadas)

// 8. reduce – canción más escuchada
const masEscuchada = canciones.reduce((max, c) =>
  c.reproducciones > max.reproducciones ? c : max,
)
console.log(
  `\n8. Canción más escuchada: "${masEscuchada.titulo}" (${(masEscuchada.reproducciones / 1000000).toFixed(1)}M)`,
)

// 9. For tradicional vs métodos modernos — misma operación, dos formas
// Obtener la suma de reproducciones de canciones en playlist:

// Con for clásico:
let sumaFor = 0
for (let i = 0; i < canciones.length; i++) {
  if (canciones[i].enPlaylist) {
    sumaFor += canciones[i].reproducciones
  }
}
console.log("\n10. Total reproducciones en playlist:")
console.log("    Con for:", sumaFor.toLocaleString())

// Con filter + reduce (moderno):
const sumaModerna = canciones
  .filter((c) => c.enPlaylist)
  .reduce((suma, c) => suma + c.reproducciones, 0)
console.log("    Con filter+reduce:", sumaModerna.toLocaleString())
// Ambos dan el mismo resultado. El estilo moderno es más legible y declarativo.
