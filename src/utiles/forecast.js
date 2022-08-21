const request=require('request')

const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=9aef826362b037e95967d26628f972a5&query='+latitude+','+longitude+'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
           callback('Unable to connect to internet',undefined);
        }else if(body.error){
            callback('can\'t find location',undefined)
        }else{
            callback(undefined,'The forecast today is '+body.current.temperature+' '+body.current.weather_descriptions[0]+', the humidity is '+body.current.humidity+' is the time now in that country is a day '+body.current.is_day)
        }
    })
}

module.exports=forecast