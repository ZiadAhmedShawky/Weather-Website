const request=require('request')

const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=9aef826362b037e95967d26628f972a5&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
           callback('Unable to connect to internet',undefined);
        }else if(error){
            callback('can\'t find location',undefined)
        }else{
            callback(undefined,{
                temp:body.current.temperature,
                weatherDescription:body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports=forecast