document.addEventListener('DOMContentLoaded', () => {

  const rutor = [ "noll",  "häst", "cykel", "telefon",
     "takbox",
 "ö",
"fabrik",
"kyrka",
"fågel",
"järnväg",
"halmbal",
"takbox",
"stockar",
"växthus",
"husdjur",
"lada",
"cykel",
"flaggstång",
"parabol",
"kyrka",
"buss",
"traktor",
"gatlykta",
"takbox",
"båt",
"ko",
"bro",
"fågel",
"ko",
"glass",
"post",
"kyrka",
"släpvagn",
"bro",
"vatten",
"parabol",
"trafikljus",
"lastbil",
"parabol",
"buss",
"takbox",
"traktor",
"häst",
"fågel",
"flaggstång",
"trafikljus",
"ko",
"halmbal",
"husvagn",
"glass",
"båt",
"post",
"trafikljus",
"fabrik",
"husdjur",
"post",
"gatlykta",
"häst",
"bensinmack",
"får",
"husbil",
"halmbal",
"takbox",
"fågel",
"motorcykel",
"elledning",
"växthus",
"ko",
"lastbil",
"släpvagn",
"båt",
"lada",
"soptunna"]
const gridDisplay = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
const resultDisplay = document.getElementById('result')
let squares = [] 
const width = 3
let score = 0

      const container = document.getElementById('board')

  function doSomethingOnClick(bild) { alert('Clicked it!' + bild); }
  function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
  }
  function doSomethingOnClick(evt) {
    // alert( 'Clicked it2!' );
    // window.alert(evt.currentTarget.myParam);
    if (document.getElementById("kryss" + evt.currentTarget.myParam)) {
      console.log("test remove")
      removeElement("kryss" + evt.currentTarget.myParam)
      // document.getElementById("kryss"+evt.currentTarget.myParam).remove();
    } else {
      console.log("test add kryss")
      var cellen = document.getElementById(evt.currentTarget.myParamLink)
      var bild = document.createElement("img");
      bild.setAttribute("src", "bilder/kryss.png");
      bild.setAttribute("height", "100%");
      bild.setAttribute("width", "100%");
      bild.setAttribute("object-fit", "contain");
      bild.setAttribute("class", "overlayImage");

      bild.setAttribute("id", "kryss" + evt.currentTarget.myParam);
      bild.addEventListener("click", doSomethingOnClick, false);
      bild.myParam = evt.currentTarget.myParam

      cellen.appendChild(bild);
    }
  }

  function getNewUniqeNumber(list) {
    for (x = 0; x < 1000; x++) {
      randomNumber = Math.floor(Math.random() * 72) + 1
      if (list.includes(rutor[randomNumber])) {
      }
      else {
        return randomNumber
      }
    }
    return 1
  }
  function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    var nummer = [] 
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      let link = document.createElement("a");
      var bild = document.createElement("img");
      // randomNumber = Math.floor(Math.random() * 26) +1
      randomNumber = getNewUniqeNumber(nummer)
      nummer.push(rutor[randomNumber])
      link.setAttribute("href", "#");
      link.setAttribute("id", "link" + c);
      // link.setAttribute("onclick", "doSomethingOnClick()" );

      bild.setAttribute("src", "bilder/" + randomNumber + ".jpeg");
      bild.setAttribute("height", "100%");
      bild.setAttribute("width", "100%");
      bild.setAttribute("alt", rutor[randomNumber]);
      bild.setAttribute("object-fit", "contain");

      // bild.setAttribute("class", "overlayImage");

      // bild.setAttribute("id", "bild"+c);

      cell.setAttribute("id", "bild" + c);
      // bild.onclick = function(e) {
      //   window.alert("Something"+c);
      // }
      bild.addEventListener("click", doSomethingOnClick, false);
      bild.myParam = c
      bild.myParamLink = "link" + c
      link.appendChild(bild);
      cell.appendChild(link);
      // cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };

  makeRows(3, 3);
})
