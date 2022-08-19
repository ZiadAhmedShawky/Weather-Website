const request=require('request')

const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=9aef826362b037e95967d26628f972a5&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
           callback('Unable to connect to internet',undefined);
        }else if(body.error){
            callback('can\'t find location',undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports=forecast