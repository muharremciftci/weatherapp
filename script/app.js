const form  = document.querySelector('form');
const detay = document.querySelector('.detay');
const kart = document.querySelector('.card');


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const sehir=form.sehir.value.trim();

    sehirGuncelle(sehir)
    .then(veri=>{
     guncelleUI(veri);
     console.log(veri);   
    });
    
    form.reset();

});




const sehirGuncelle=async(sehir)=>{
    const sehirDetay=await sehirGetir(sehir);
    const havaDurumu=await havaDurumuGetir(sehirDetay.Key);


    return {
        sehirDetay,
        havaDurumu
    }
};  



const guncelleUI=(veri)=>{

    // const sehirDetay=veri.sehirDetay;
    // const havaDurumu=veri.havaDurumu;

    const {sehirDetay,havaDurumu}=veri;

    detay.innerHTML='<div class="text-muted text-uppercase text-center detay"><h5 class="my-3">'+sehirDetay.LocalizedName+'</h5><div class="my-3">'+havaDurumu.WeatherText+'</div><div class="display-4 my-4"><span>'+havaDurumu.Temperature.Metric.Value+'</span><span>&deg;C</span></div></div>';


    if(kart.classList.contains('d-none')){

        kart.classList.remove('d-none');
    }

}
