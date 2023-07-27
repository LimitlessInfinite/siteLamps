const area = document.createElement('div');
area.className = 'area'
document.body.appendChild(area);
// const imageTest = document.createElement('img');
// imageTest.src = "src/static/images/logo.jpg";
// imageTest.alt = "test"
// area.appendChild(imageTest);

const props = [
  {
    name: 'LUMINARIA SONNE 80W 3S APP WHITE',
    form: "Квадрат",
    power: "80w",
    lumen: "8000",
    ServiceHours: "50000",
    colorKelvin: "3000-6500",
    angle: "180",
    rippleCoef: "0,2%",
    length: "525mm",
    width: "525mm",
    height: "110",
    color: "белый",
    ip: "20",
    material: "метал, акрил",
    operatingVoltage: "170-265",
    ra: "80",
    temperatureRegime: "-10...+40°C",
    warranty: "2 года",
    img: "src/static/images/logo.jpg"
  },
  {
    name: 'Lamp2',
    img: "src/static/images/logo.jpg"
  },
  {
    name: 'Lamp3',
    img: "src/static/images/logo.jpg"
  },
  {
    name: 'Lamp4',
    img: "src/static/images/logo.jpg"
  },
  {
    name: 'Lamp5',
    img: "src/static/images/logo.jpg"
  }
];

let activeCard = null;

function productCard(props) {

  const titleBlock = (parameter, value) => {
    const divBlock = document.createElement("div")
    const h6Title = document.createElement("h6")
    const h6Title2 = document.createElement("h6")
    
    h6Title.innerText = parameter
    h6Title2.innerText = value
    h6Title.className = "nameDesc"
    h6Title2.className = "nameDescContent"
    divBlock.append(h6Title,h6Title2)
    divBlock.style.display = "flex"
    return divBlock
  }

  const titleName = (titl) => {
    const divBlock = document.createElement("div")
    const h3Title = document.createElement("h3")
    h3Title.innerText = titl
    h3Title.className = "titleName"
    divBlock.className ="titleName"
    divBlock.appendChild(h3Title)
    return divBlock
  }

  for (let i = 0; i < props.length; i++) {
    // let isOpened = false

    const card = document.createElement('div');
    const previewContainer = document.createElement('div');
    const imagePreviewContainer = document.createElement("div")
    const image = document.createElement('img');
    const titleContainer = document.createElement('div');
    const nameLamp = document.createElement('h3');
    const h6LumenPreviw = document.createElement("h6")

    card.id = (`card`) + i
    image.id = (`img`) + i
    previewContainer.id = ("preview") + i
    imagePreviewContainer.id = ("previewCont") + i

    card.className = 'card';
    previewContainer.className = 'previewContainer'
    imagePreviewContainer.className = "previewContainer"
    image.className = "imgMain"
    titleContainer.className = 'titleContainer';
    nameLamp.className = 'nameTitle';
    h6LumenPreviw.className = "nameDescTitle"

    image.src = props[i].img;
    nameLamp.innerText = props[i].name;
    h6LumenPreviw.innerText = props[i].lumen + " " + "Lumens"
    titleContainer.appendChild(nameLamp);

    imagePreviewContainer.appendChild(image)
    nameLamp.appendChild(h6LumenPreviw)
    previewContainer.append(imagePreviewContainer, nameLamp);

    titleContainer.append(titleName("Характеристики"))
    titleContainer.append(titleBlock("Название:",props[i].name))
    titleContainer.append(titleBlock("Форма:",props[i].form))
    titleContainer.append(titleBlock("Мощность(Вт):",props[i].power))
    titleContainer.append(titleBlock("Люмены:",props[i].lumen))
    titleContainer.append(titleBlock("Срок службы(часов):",props[i].ServiceHours))
    titleContainer.append(titleBlock("Цветовая температура(К):",props[i].colorKelvin))
    titleContainer.append(titleBlock("Угол рассеивания:",props[i].angle))
    titleContainer.append(titleBlock("Коефициент пульсации(%):",props[i].rippleCoef))
    titleContainer.append(titleBlock("Длина(mm):",props[i].length))
    titleContainer.append(titleBlock("Ширина(mm):",props[i].width))
    titleContainer.append(titleBlock("Высота(mm):",props[i].height))
    titleContainer.append(titleBlock("Цвет:",props[i].color))
    titleContainer.append(titleBlock("IP:",props[i].ip))
    titleContainer.append(titleBlock("Материал:",props[i].material))
    titleContainer.append(titleBlock("Вольтаж(V):",props[i].operatingVoltage))
    titleContainer.append(titleBlock("Коеф. цветоперидачи(RA):",props[i].ra))
    titleContainer.append(titleBlock("Температурный режим:",props[i].temperatureRegime))
    titleContainer.append(titleBlock("Гарантия:",props[i].warranty))


    card.append(previewContainer, titleContainer);
    area.append(card);

    //////////////////////////////////////////
    function draw(timePassed) {
      console.log(timePassed)
      card.style.height = 100 + timePassed + 1300 + 'px';
      // card.className = 'cardOpen';

    }

    function isActiveCard(tab) {
      if (activeCard && (tab.id !== activeCard)) {
        console.log("tabId is: " + tab.id)
        let deactivateTab = document.getElementById(activeCard)
        let deactivatePreview = document.getElementById("preview"+activeCard.slice(4))
        let deactivateImg = document.getElementById("img"+activeCard.slice(4))
        let deactivateImgPrevCont = document.getElementById("previewCont" + activeCard.slice(4)) 

        deactivateImgPrevCont.className = "previewContainer"
        deactivateImg.className = "imgMain"
        deactivatePreview.className = "previewContainer"
        deactivateTab.className = `card`
        deactivateTab.style = "card"
        // deactivateTab.image.className = "imgHide"
        deactivateTab.isOpened = false
        activeCard = tab.id
        console.log("active card is: " + activeCard)
      }
    }



    let doc = document.getElementById((`card`) + i);
    let prev = document.getElementById(('preview') + i)
    let prevImg = document.getElementById(("img") + i)
    let prevImgContainer = document.getElementById(("previewCont") + i)

    doc.onclick = function (event) {
      //   alert('hello ' + card.id);
      if (doc.className === "card") {
        console.log(activeCard)

        isActiveCard(doc)
        //  closeOtherTabs((`card`) + i)
        // console.log("card: " + card.id + "is " +(!isOpened ? "Opened" : "Closed"))

        let start = Date.now();

        let timer = setInterval(function () {
          let timePassed = Date.now() - start;

          if (timePassed >= 100) {
            clearInterval(timer);
            return;
          }

          draw(timePassed);
        }, 20);
        // card.style = "cardO";


        // card.className = 'cardOpen';

        // image.className="img"

        doc.className = "cardOpen"
        prevImgContainer.className = "previewContainerOpen"
        prevImg.className = "imgFullPreview"
        prev.className = "previewContainerOpen"
        activeCard = doc.id
      }
      else {
        // console.log("card: " + card.id + "is " +(isOpened ? "Closed" : "Opened"))
        card.className = 'card';
        card.style = "card";
        prev.className = "previewContainer"
        prevImgContainer.className = "previewContainer"
        prevImg.className = "imgMain"
        // image.className="imgHide"
        // card.style.height = 50;


      }
    };
  }
}

productCard(props);
