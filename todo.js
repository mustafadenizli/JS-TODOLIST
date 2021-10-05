

//kapat spanı oluşturulup her bir liste öğesine eklendi.


let liDom = document.getElementsByTagName("li");  //li elementine erişme

let index = 0
for(; index < liDom.length; index++){      //kaç tane li varsa dön
    let span = document.createElement("span");  //span oluştur
    let txt = document.createTextNode("\u00D7");  //x oluşturma
    span.className = "close";   //class name ver
    span.appendChild(txt);  //span'a ekle
    liDom[index].appendChild(span);  //listeye ekle her birini

}

//listeden çıkartmak istediğimiz öğeyi yapma => eleman silme
let close = document.getElementsByClassName("close")

let i = 0
for(; i < close.length; i++ ){
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";

    }
}

//yapıldı işareti ekleme

let ulList = document.querySelector('#list')

ulList.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked')
    }
} , false )

//ekle butonuna basıldığında yeni bir öğe ekleme

function newElement(){
     let liDom = document.createElement('li');
     let inputDomValue = document.querySelector("#task").value;
     let inputValue = document.createTextNode(inputDomValue);
     liDom.appendChild(inputValue);

     if(inputDomValue === '' )   //boş ise text 
     {  
         console.log("bir şeyler girmelisin!!!")  //hata mesajı verdik
        //  alert("bir şeyler girmelisin!!!")
        //TOAST kullanımı
          $('.toast').toast('show')
           
     }else {
         document.querySelector("#list").appendChild(liDom); //boş degilse ekledik
     }
     document.querySelector("#task").value = ""; //Text'in içini ekledikten sonra boşalttık.

     let span = document.createElement("SPAN");   //span oluşturduk.
     var spanText = document.createTextNode("\u00D7");  //span'ı x yaptık
     span.className = "close";  //class verdik
     span.appendChild(spanText);  //span'a ekledik text'i
     liDom.appendChild(span);   // li'ye spanı ekledik

     for(let i = 0; i < close.length; i++){
          close[i].onclick = function() {
              let div = this.parentElement;   //hangi span seç
              div.style.display = "none";    //görünürlüğünü götür
          }
     }



}



