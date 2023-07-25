$(document).ready(() => {
  const renderNav = (navArray) => {
    let navContent = "";
    let tabContent = "";
    navArray.navPills.forEach((item, index) => {
      let navActive;
      navActive = index === 0 ? "active" : "";

      navContent += `<li class="nav-item">
    <a
      class="nav-link btn-default ${navActive}"
      data-toggle="pill"
      href="#${item.tabName}"
    >
      ${item.showName}
    </a>
  </li>`;

      let tabActive;
      tabActive = index === 0 ? "active show" : "";
      tabContent += `<div class="tab-pane container fade ${tabActive}" id=${
        item.tabName
      }>
        <div class="row">
        ${renderTabPane(item.tabName, navArray.tabPanes)}
        </div>
        </div>`;
    });
    $(".nav-pills").html(navContent);
    $(".tab-content").html(tabContent);
    clickFuntionForButtons();
  };

  const renderTabPane = (tabName, tabPanes) => {
    let a;
    switch (tabName) {
      case "tabTopClothes":
        return renderItems(getItemsByType("topclothes", tabPanes));
      case "tabBotClothes":
        return renderItems(getItemsByType("botclothes", tabPanes));
      case "tabShoes":
        return renderItems(getItemsByType("shoes", tabPanes));
      case "tabHandBags":
        return renderItems(getItemsByType("handbags", tabPanes));
      case "tabNecklaces":
        return renderItems(getItemsByType("necklaces", tabPanes));
      case "tabHairStyle":
        return renderItems(getItemsByType("hairstyle", tabPanes));
      default:
        return renderItems(getItemsByType("background", tabPanes));
    }
  };
  const renderHTML = async () => {
    $.getJSON("./../data/Data.json")
      .done((res) => {
        renderNav(res);
      })
      .fail((err) => {
        console.log(err);
      });
  };
  renderHTML();
});
