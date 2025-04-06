const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');
const bodyParser=require('body-parser');
const fs=require('fs');

const app=express();
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'kutyafajtak'
});


db.connect(err=>{
    if(err){
        console.log(err);
    }
    console.log('mysql connected');
});


app.get('/kutyak', (req,res)=>{
    const query="SELECT * FROM kutyak";
    db.query(query, (err, results)=>{
        if(err){
            return res.status(500).json({err:"hiba a lekers soran"});
        }
        res.json(results);
    });
});


app.get('/kutyak/:id', (req,res)=>{
    const {id}=req.params;
    const query="SELECT * FROM kutyak WHERE id=?";
    db.query(query, [id], (err, results)=>{
        if(err){
            return res.status(500).json({err:"hiba a lekers soran"});
        }
        res.json(results);
    });
});

app.post('/kutyak', (req,res)=>{
    const {fajta,leiras,kepUrl}=req.body;
    const query="INSERT INTO kutyak(fajta,leiras,kepUrl) VALUES (?,?,?)";
    db.query(query, [fajta,leiras,kepUrl], (err, results)=>{
        if(err){
            return res.status(500).json({err:"hiba a lekers soran"});
        }
        res.json("A feltoltes sikeresen megtortent.");
    });
});

app.put('/kutyak/:id', (req,res)=>{
    const {id}=req.params;
    const {fajta}=req.body;
    const query="UPDATE kutyak SET fajta=? WHERE id=?";
    db.query(query, [fajta,id], (err, results)=>{
        if(err){
            return res.status(500).json({err:"hiba a lekers soran"});
        }
        res.json("A modositas sikeresen megtortent.");
    });
});


app.delete('/kutyak/:id', (req,res)=>{
    const {id}=req.params;
    const query="DELETE FROM kutyak WHERE id=?";
    db.query(query, [id], (err, results)=>{
        if(err){
            return res.status(500).json({err:"hiba a lekers soran"});
        }
        res.json("A torles sikeresen megtortent.");
    });
});


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});