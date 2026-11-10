const express=require("express");
const app=express();
const PORT=3000;

app.get('/kvadrat/:n', (req, res)=>
{
    const broj=Number(req.params.n); //kada nema upitnika, nego je u URLu samo broj onda imamo
    if (!Number.isInteger(broj))
    {
        res.status(400).json({error:"Podatk koje ste posali nije broj"});
    }
    else
    {
        res.json({rezultat:broj*broj});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});