const express=require("express");
const app=express();
const axios=require("axios");
const PORT=3000;

app.get('/vic', async(req, res)=>
{
    try
    {
        //dohvat šale s vanjskog servera
        const odgovor=await axios.get("https://v2.jokeapi.dev/joke/Any?format=json");
        res.json({joke:odgovor.data.setup+" "+odgovor.data.delivery});
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