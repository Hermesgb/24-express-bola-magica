const express = require("express")
const bolaMagica = express()
const port = 3000

bolaMagica.use(express.static('public/'))

const respuesta = (req, res) =>{
    arrayRespuestas = [
        'Es cierto.',
        'Es decididamente así.',
        'Sin lugar a dudas.',
        'Sí, definitivamente.',
        'Puedes confiar en ello.',
        'Como yo lo veo, sí.',
        'Lo más probable.',
        'Perspectiva buena.',
        'Sí.',
        'Las señales apuntan a que sí.',
        'Respuesta confusa, vuelve a intentarlo.',
        'Vuelve a preguntar más tarde.',
        'Mejor no decirte ahora.',
        'No se puede predecir ahora.',
        'Concéntrate y vuelve a preguntar.',
        'No cuentes con ello.',
        'Mi respuesta es no.',
        'Mis fuentes dicen que no.',
        'Las perspectivas no son muy buenas.',
        'Muy dudoso.'
    ]
    var fraseRandom = arrayRespuestas[Math.floor(Math.random() * 20)]
    res.send(fraseRandom)
}
bolaMagica.get("/respuesta", respuesta)
bolaMagica.listen(port, () => {
    console.log(`Bola Mágica escuchando en http://localhost:${port}`)
})