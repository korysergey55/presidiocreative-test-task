const markupRef = document.querySelector(".markupContainerSecondPage");
const buttonsContainerRef = document.querySelector(
 ".changingContentSecondPage"
);

buttonsContainerRef.addEventListener("click", renderMarkupSecondPage);

function renderMarkupSecondPage(event) {
 if (event.target.name === "first") {
  markupRef.innerHTML = makeMarkup(items[0]);
 }
 if (event.target.name === "second") {
  markupRef.innerHTML = makeMarkup(items[1]);
 }
 if (event.target.name === "third") {
  markupRef.innerHTML = makeMarkup(items[2]);
 }
 return;
}

const makeMarkup = (item) => {
 const markup = `
  <ul class="markupContainerSecondPage">
      <li class="markup_itemSecond">
       <ul class="markupItemList">
        <li class="markupItem">
         <button class="markupItem_link"  name="first">Flaxible test disign</button>
         <p class="markupItem_content">${item.text}</p>
        </li>
        <li class="markupItem">
         <button class="markupItem_link"  name="second">Sequence once, query often</button>
         <p class="markupItem_content">${item.text1}</p>
        </li>
        <li class="markupItem">
         <button class="markupItem_link"  name="third">Comprehensive PGx</button>
         <p class="markupItem_content">${item.text2}</p>
        </li>
       </ul>
      </li>
      <li class="markup_itemSecond">
       <img class="markupImgSecond" src="${item.img}" />
      </li>
     </ul>
  `;
 return markup;
};

const items = [
 {
  img: "../images/1.png",
  text:
   "The Exome+ assay provides the flexibility needed to build a comprehensive panel that can be expanded over time. With ~20,000 genes sequenced in each sample, every gene becomes a candidate for inclusion. And, while we have ensured the highest call rates across those genes that are most likely to belong to a panel, the Exome+ assay delivers high call rates for all genes beyond this core set.",
  text1: "",
  text2: "",
 },
 {
  img: "../images/2.png",
  text: " ",
  text1:
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ab ea totam aperiam repellendus praesentium quibusdam hic eaque quo placeat aliquam enim sint laborum harum, iusto rerum sunt quis necessitatibus!",
  text2: "",
 },
 {
  img: "../images/3.png",
  text: " ",
  text1: "",
  text2:
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ab ea totam aperiam repellendus praesentium quibusdam hic eaque quo placeat aliquam enim sint laborum harum, iusto rerum sunt quis necessitatibus!",
 },
];
