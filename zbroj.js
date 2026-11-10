//Napravimo rutu GET /zbroj koji prima parametre a u be kroz URL
//Primjer /zbroj?a=5&B=10
//ZADATAK je vratiti broj

const express=require("express");
const app=express();
const PORT=3000;
app.get('/zbroj', (req, res)=>
{
const broj1=Number(req.query.a);
const broj2=Number(req.query.b);

    if (Number.isNaN(broj1) || Number,isNan(broj2))
    {
        res.status(400).json({error:"Parametry nisu brojevi"})
    }
    else
    {
        res.json({rezultat:broj1+broj2});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});