let urun_sayisi = 5;

// JSON dosyasını yükleme işlemi
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // JSON verisi başarıyla yüklendi, şimdi işleyelim
    console.log(data); // Veriyi konsola yazdır

    let products = data.products;

    for (let i = 0; i < urun_sayisi; i++) {
      let kolon = document.createElement("div");
      kolon.className = "col";

      let card = document.createElement("div");
      card.className = "card";

      let img = document.createElement("img");
      img.className = "card-img-top";
      img.src = products[i].image; // JSON'dan gelen görsel yolunu ayarla
      img.alt = products[i].name; // Görsel için alternatif metin

      let card_body = document.createElement("div");
      card_body.className = "card-body";

      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = products[i].name; // Ürün adını JSON'dan al

      let p = document.createElement("p");
      p.className = "card-text";
      p.textContent = products[i].description; // Ürün açıklamasını JSON'dan al

      let a = document.createElement("a");
      a.className = "btn btn-primary";
      a.textContent = "Satın Al";

      card_body.appendChild(h5);
      card_body.appendChild(p);
      card_body.appendChild(a);

      card.appendChild(img);
      card.appendChild(card_body);

      kolon.appendChild(card);

      let rov_div = document.querySelectorAll(".row")[1];
      rov_div.appendChild(kolon);
    }
  })
  .catch(error => {
    console.error('Hata:', error);
  });
