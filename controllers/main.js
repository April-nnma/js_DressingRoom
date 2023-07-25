let listChosen = new ListChosen();

const getItemsByType = (type, tabPanes) => {
  let arrItems = tabPanes.filter((item) => {
    if (item.type === type) {
      return item;
    }
  });
  return arrItems;
};

const renderItems = (arrItems) => {
  let tabPaneContent = arrItems
    .map(
      (item) => `
      <div class="col-md-3">
        <div class="card text-center">
          <img src="${item.imgSrc_jpg}" />
          <h4><b>${item.name}</b></h4>
          <button
            class="changeStyle"
            data-id="${item.id}"
            data-type="${item.type}"
            data-name="${item.name}"
            data-desc="${item.desc}"
            data-img-src-jpg="${item.imgSrc_jpg}"
            data-img-src-png="${item.imgSrc_png}"
            style="
              display: inline-block;
              font-size: 16px;
              text-align: center;
              text-decoration: none;
              color: black;
              background: linear-gradient(to right, #ACAFFA, #E0B5FA, #FAC3E3);
              border: none;
              width: 160px;
              height: 40px;
              border-radius: 70%;
              cursor: pointer;
              padding: 10px 20px;
              transition: background-color 0.3s ease;
          "
        >
          Try it
        </button>

        </div>
      </div>
    `
    )
    .join("");

  return tabPaneContent;
};

const clickFuntionForButtons = () => {
  $(".changeStyle").click(function () {
    let id = $(this).data("id");
    let type = $(this).data("type");
    let name = $(this).data("name");
    let desc = $(this).data("desc");
    let imgsrc_jpg = $(this).data("img-src-jpg");
    let imgsrc_png = $(this).data("img-src-png");

    let chosenItem = new ChoseItem(
      id,
      type,
      name,
      desc,
      imgsrc_jpg,
      imgsrc_png
    );

    if (listChosen.arr.length > 0) {
      for (let i in listChosen.arr) {
        if (listChosen.arr[i].type === chosenItem.type) {
          listChosen.arr.splice(i, 1);
          break;
        }
      }
    }

    listChosen.addAddItem(chosenItem);
    renderItemsOnModel(listChosen.arr);
  });
};

const renderItemsOnModel = (arrItems) => {
  for (let item of arrItems) {
    switch (item.type) {
      case "topclothes":
        renderBikiniTop(item.imgsrc_png);
        break;
      case "botclothes":
        renderBikiniBottom(item.imgsrc_png);
        break;
      case "shoes":
        renderFeet(item.imgsrc_png);
        break;
      case "handbags":
        renderHandbags(item.imgsrc_png);
        break;
      case "necklaces":
        renderNecklace(item.imgsrc_png);
        break;
      case "hairstyle":
        renderHairstyle(item.imgsrc_png);
        break;
      default:
        renderBackground(item.imgsrc_png);
    }
  }
};

function renderBikiniTop(img) {
  $(".bikinitop").css({
    width: "500px",
    height: "500px",
    background: `url(${img})`,
    position: "absolute",
    top: "-9%",
    left: "-5%",
    zIndex: "3",
    transform: "scale(0.5)",
  });
}

function renderBikiniBottom(img) {
  $(".bikinibottom").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    top: "-30%",
    left: "-5%",
    zIndex: "2",
    transform: "scale(0.5)",
  });
}

function renderFeet(img) {
  $(".feet").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    bottom: "-37%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: "1",
  });
}

function renderHandbags(img) {
  $(".handbag").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: "4",
  });
}

function renderNecklace(img) {
  $(".necklace").css({
    width: "500px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: "4",
  });
}

function renderHairstyle(img) {
  $(".hairstyle").css({
    width: "1000px",
    height: "1000px",
    background: `url(${img})`,
    position: "absolute",
    top: "-75%",
    right: "-57%",
    transform: "scale(0.15)",
    zIndex: "4",
  });
}

function renderBackground(img) {
  $(".background").css({
    backgroundImage: `url(${img})`,
  });
}
