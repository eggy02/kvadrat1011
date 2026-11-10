const express=require("express");
const app=express();
const PORT=3000;

function provjeri(req)
{
    const broj1=Number(req.query.a);
    const broj2=Number(req.query.b);

    if (Number.isNaN(broj1) || Number.isNaN(broj2))
    {
        return {error:"Parametri nisu brojevi"}
    }
    else
    {
        return {broj1, broj2};
    }
}
app.get('/zbroji', (req, res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
    }
    else
    {
        let rezultat=validacija.broj1+validacija.broj2;
        res.json({zbroj:rezultat});
    }
})
app.get('/oduzmi', (req, res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
    }
    else
    {
        let rezultat=validacija.broj1-validacija.broj2;
        res.json({oduzmi:rezultat});
    }
})
app.get('/pomnozi', (req, res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
    }
    else
    {
        let rezultat=validacija.broj1*validacija.broj2;
        res.json({pomnozi:rezultat});
    }
})
app.get('/dijeli', (req, res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
    }
    else
    {
        let rezultat=validacija.broj1/validacija.broj2;
        res.json({dijeli:rezultat});
    }
});
app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});