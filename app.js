import 'dotenv/config';
import express from 'express';


const app = express() // <-- instancia del servidor

try {
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, () => console.log("Servidor activo en el puerto " + PORT))
} catch (error) {
    console.log(error);
}