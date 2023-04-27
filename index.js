import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './rotas/users.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
    
    console.log('TEST')

    res.send('Aooba')

})

app.listen(PORT, () => console.log(`Server rodando na porta: http://localhost:${PORT}`))