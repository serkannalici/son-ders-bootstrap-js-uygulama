let urun_sayisi=5
for(i=1;i<=urun_sayisi;i++){
    let kolon=document.createElement("div") // yeni boş div elementi oluşturduk.
    kolon.className="col" // div elementinin class'o col olsun.
    
    // kolonun içerisindeki card div'i
    let card=document.createElement("div") //card için yeni div
    card.className="card" //card div'inin class'ı card olsun.
    
    // card içerisindeki elementler

    //1
    let img=document.createElement("img") //card div'inin içerisinde yer alan img etiketi.
    img.className="card-img-top" // img etikeninin class'ı
    img.src="/images/saat_"+i+".jpg" //img etiketinin source(kaynak).
    
    //2
    let card_body=document.createElement("div") // card div'inin içerisinde yer alan card-body div'i
    card_body.className="card-body" // card-body div'inin class'ı
    
    // card body içerisindeki elementler

    //1
    let h5=document.createElement("h5")
    h5.className="card-title"
    h5.textContent="Ürün "+i
    //2
    let p=document.createElement("p")
    p.className="card-text"
    p.textContent="Açıklama"
    //3
    let a=document.createElement("a")
    a.className="btn btn-primary"
    a.textContent="Satın Al"
    
    kolon.appendChild(card) // kolon div'inin içerisine card div'inin eklenmesi

    // card div'inin içerisine img ve card-body divlerinin eklenmesi
    card.appendChild(img) // img
    card.appendChild(card_body) // card-body
    
    // card-body div'inin içerisine h5, p, ve a etiketlerinin eklenmesi 
    card_body.appendChild(h5) //h5
    card_body.appendChild(p) // p
    card_body.appendChild(a) //a
    
    
    
    let rov_div=document.querySelectorAll(".row")[1] // 2.row div'i seçildi.
    
    
    
    rov_div.appendChild(kolon); //row div'inin içerisine kolon div'inin eklenmesi.
    
}




