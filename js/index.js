const markupContainerRef = document.querySelector(".changing-content");
const buttonsRef = document.querySelector(".buttonsList");

buttonsRef.addEventListener("click", renderMarkup);

function renderMarkup(event) {
 if (event.target.name === "first") {
  markupContainerRef.innerHTML = makeMarkup(items[0]);
  const activeBtn = document.querySelector(".current");
  activeBtn?.classList.remove("current");
  event.target.classList.add("current");
 }
 if (event.target.name === "second") {
  markupContainerRef.innerHTML = makeMarkup(items[1]);
  const activeBtn = document.querySelector(".current");
  activeBtn?.classList.remove("current");
  event.target.classList.add("current");
 }
 if (event.target.name === "third") {
  markupContainerRef.innerHTML = makeMarkup(items[2]);
  const activeBtn = document.querySelector(".current");
  activeBtn?.classList.remove("current");
  event.target.classList.add("current");
 }
 return;
}

const makeMarkup = (item) => {
 const markup = `
  <ul class="markupContainer">
  <li class="markup_item">
  <h2 class="markup_item-title">${item.title}</h2>
  <p class="markup_item-content">${item.text}</p>
  </li>
  <li class="markup_item"><img class="markupImg" src="${item.img}"></li>
  </ul>
  `;
 return markup;
};

const items = [
 {
  img: "../images/Oval.png",
  title: "Targeted Panels",
  text:
   "Panels are often used in clinical settings because they’re low cost and provide high quality coverage of specific, pre-defined genomic regions of interest. While useful in certain settings, such assays are limited by their narrow focus. With ≥ 99.5% call rate across ~600 genes relevant to many disease states, the Exome+ assay enables you to run multiple panel-grade analyses with a single sample",
 },
 {
  img: "../images/Oval2.png",
  title: "Whole Exome Sequencing",
  text:
   " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ab ea totam aperiam repellendus praesentium quibusdam hic eaque quo placeat aliquam enim sint laborum harum, iusto rerum sunt quis necessitatibus!",
 },
 {
  img: "../images/Oval3.png",
  title: "lcWGS and Microarrays",
  text:
   " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ab ea totam aperiam repellendus praesentium quibusdam hic eaque quo placeat aliquam enim sint laborum harum, iusto rerum sunt quis necessitatibus!",
 },
];
