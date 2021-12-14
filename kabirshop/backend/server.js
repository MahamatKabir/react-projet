import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import morgan from 'morgan'
//import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB();
const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running') 
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

/*app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})*/
//error resolver 

app.use(notFound)

app.use(errorHandler)
const PORT = process.env.PORT || 8000;   

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

