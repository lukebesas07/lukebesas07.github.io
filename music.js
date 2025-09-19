const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const categoryName = previewBox.querySelector(".title p");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".close-preview");
const shadow = document.querySelector(".shadow");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };

  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};

function preview(element) {
  document.body.style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src;
  let selectedImgCategory = element.getAttribute("data-name");
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory;
  previewBox.classList.add("show");
  shadow.classList.add("show");
}

closeIcon.onclick = () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("show");
  document.body.style.overflow = "auto";
};

shadow.onclick = () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("show");
  document.body.style.overflow = "auto";
};