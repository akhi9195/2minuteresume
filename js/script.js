///////////////////////////////////////////////////////////
const myName = "Akhilesh Bashettiwar";

// Mobile naviagtion

const btnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".header");
const skillRatingsEl = document.querySelector(".section-skills");

// btnNavEl.addEventListeenr("click", function () {
//   HeaderEl.classList.toggle("nav-open");
// });

function clickMenu() {
  console.log("click Menu....");
  HeaderEl.classList.toggle("nav-open");
  skillRatingsEl.classList.toggle("nav-opened");
  document.body.classList.remove("sticky");
}

/////////////// Desktop Menu Hide & Show

const menuRowEl = document.querySelector(".menu-row");
const mainnNavEl = document.querySelector(".main-nav");

// btnNavEl.addEventListeenr("click", function () {
//   HeaderEl.classList.toggle("nav-open");
// });

function clickDesktopMenu() {
  console.log("click Desktop Menu....");
  menuRowEl.classList.toggle("nav-desktop-open");
  // HeaderEl.classList.toggle("");
  // mainnNavEl.classList.toggle("hide-menu-list");
}

///////////////////////////////////////////////////////////
//Smooth scrolling animation

/////////////////////////
//STICKY NAVIGATION

const sectionWorkEl = document.querySelector(".section-work-history");
//1st param: null (means in side view port)
//2nd param:root
//root margin
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (!ent.isIntersecting) {
//       document.querySelector(".header").classList.add("sticky");
//     }
//     if (ent.isIntersecting) {
//       document.querySelector(".header").classList.remove("sticky");
//     }
//   },
//   {
//     //In tthe viewport
//     root: null,
//     thershold: 0,
//     rootMargin: "-160px",
//   }
// );
// obs.observe(sectionWorkEl);
