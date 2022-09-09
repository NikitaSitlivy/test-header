// function makeXHR() {
//     var xhr = new XMLHttpRequest(); //создание объекта для работы с асинхронными запросами

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             const parseJson = JSON.parse(xhr.responseText)

//             for (let i = 0; i < parseJson.length; i++) {
//                 let div = document.createElement("div")
//                 div.classList.add('slider__item')
//                 const parent = document.getElementById("slidesAjax")
//                 div.innerHTML= parseJson[i].name

//                 parent.append(div);

//             }

//             console.log(document.getElementById("slidesAjax"))
//         }
//     }

//     //формирование запроса 
//     xhr.open("GET", "./json/nav.json", true);
//     //отправка запроса
//     xhr.send();
// }
// makeXHR()


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView:9,
  // loop:true,
  initialSlide:-1,
  // centered:false,
});

