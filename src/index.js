import dotenv from 'dotenv'
import connectToDB from './db/dbConnect.js'
import app from './app.js'

dotenv.config({
    path: './.env'  // if giving prob try "./.env"
})

connectToDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️  Server is running on port: ${process.env.PORT}`);
    })
})
.catch((error) => console.log("MONGODB connection failed!!!: ", error))