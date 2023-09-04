function toggleButton(a) {
  const button = document.querySelector(a);
  if (!button.classList.contains('activated')) {
    /*
    ikinci fonksiyonu burada çalıştırmamızın sebebi
    önceden faal olan butonu bulmaktır
    */
    turnOffPreviousButton();

    button.classList.add('activated');
  } else {
    button.classList.remove('activated');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.activated');
  if (previousButton) {
    previousButton.classList.remove('activated');
  }
}

/*
Bu durumda iki fonksiyona ihtiyaç duyuyoruz. 
Birincisi tuş açıp kapatmaya yarıyor.
Fonksiyon parametre olarak query selectorden gelecek
argümanı alıyor.
Buton adları onclick vasıtası ile fonksiyona eklenip 
çalıştırılıyor.

Butonun ikinci css haline geçebilmesi için ayrı bir
class adını elemente dahil etmemiz gerekiyor.
Bu fonksiyon da bu işe yarıyor.

Eğer fonksiyonun çalıştırıldığı butonda halihazırda
activated class adı yoksa tasarımı da
adresleyemeyecektir. classList.add('activated') ile class
adını ekliyoruz.
Önceden bu class adı varsa classList.remove('activated')
ile siliyoruz ve tasarım ilk haline dönüyor.


İkinci fonksiyon ise tıklama yapıldığı esnada activated
class adını taşıyan elementi bulup o elementteki 
activated class adını siliyor.
Aynı anda birden fazla activated class adı olamayacağı 
için bu buton illaki bir önceki tıklanan buton olmuş 
oluyor 
*/