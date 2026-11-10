const express=require("express");
const app=express();
const PORT=3000;

const axios=require("axios");
//pocetna ruta
app.get('/', (req, res)=>
{
    res.send("Dobrodošli na api za chuck norris šale! Upiši localhost:3000/chuck")
});
app.get('/chuck', async(req, res)=>
{
    try
    {
        //dohvat šale s vanjskog servera
        const odgovor=await axios.get("https://api.chucknorris.io/jokes/random");
        res.json({sala:odgovor.data.value})
    }
    catch(error)
    {
        res.status(500).json({error:"Dogodila se greška"});
    }
});
app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});