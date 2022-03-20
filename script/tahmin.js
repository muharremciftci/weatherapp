const key='ME9pm4m98srsnlHzTBmHB6SJ4xeZQuKA'; 

const sehirGetir=async(konum)=>{
    const temelurl='http://dataservice.accuweather.com/locations/v1/cities/search';


    const sorgu='?apikey='+key+'&q='+konum+'';

    const res = await fetch(temelurl+sorgu);

    const veri=await res.json();

    console.log(veri);

    return veri[0];

}

sehirGetir('adana').then(veri=>{

    console.log(veri);  
}).catch(err=>{
    console.log(err)
});