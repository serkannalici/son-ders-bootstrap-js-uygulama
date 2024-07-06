// HTML dosyasını fetch ile çeker
fetch('menu.html')
    .then(function(response) {
        // Yanıtı text olarak döndürür
        return response.text();
    })
    .then(function(data) {
        // Çekilen veriyi belirli bir elementin içine yerleştirir
        document.querySelector('#menu').innerHTML = data;
    })
    .catch(function(error) {
        // Hata oluşursa konsola yazdırır
        console.error('Hata:', error);
    });
