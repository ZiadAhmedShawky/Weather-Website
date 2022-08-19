const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utiles/geocode')
const forecast=require('./utiles/forecast')

const app=express()

const partialPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(partialPath)


app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:"ziad ahmed"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        msg:'Helping people page',
        name:'Z0Z'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About",
        name:"Ziad Ahmed"
    })
})

app.get('/weather',(req,res)=>{

    geocode(req.query.address,(error,{latitude,longitude,place}={} )=>{
        if(error){
            return res.send({error}); 
        }
        if(!req.query.address){
            return res.send('there is no location provided');
        }
        forecast(latitude,longitude,(error,{temp,weatherDescription})=>{
            if(error){
                return res.send({error});
            }
            res.send({
                latitude:latitude,
                location:req.query.address,
                place:place,
                temp:temp,
                weatherDescription:weatherDescription
            })            
           
        })
    })
    
    /* if(!req.query.address){
       return res.send({
            error:'You must provide an adress'
        })
    }
    console.log();
    res.send({
        address:req.query.address
    }) */
    
})

app.get('/products',(req,res)=>{
    console.log(req.query);
     res.send({
        products:[req.query]
     })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        error:'Help article not found',
        name:'Ziad Ahmed'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        error:'This page is not found',
        name:'Ziad Ahmed'
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})