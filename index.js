const challenges = [
  {
    id: "Introduction",
    desc: "Each member of the team should create a 30 seconds elevator pitch on what they're passionate about, why, and what they want to do to solve it, as well as what they bring to the team.",
    link: "https://www.youtube.com/watch?v=GyUBPdYef90",
    image: "./images/intro.png",
  },
  {
    id: "Discover Africa",
    desc: "An interesting story of an ambitious  African woman. We challenged ourselves to tell the story driven by the power of telling victorious stories and for the love and strong hopes in Africa.",
    link: "https://www.youtube.com/watch?v=sCsI32j3mmw&t=19s",
    image: "./images/generic.png",
  },
  {
    id: "Help Lab",
    desc: "We believe in growing by lifting others and    our compassion drives us to contributing  to Home for Hope Foundation, a charity  home dedicated to facilitating education and wellbeing in Kabuga.  link to the video",
    link: "https://www.youtube.com/watch?v=0zbnZeP38iw",
    image: "./images/help.png",
  },
  {
    id: "Hunt for Treasure",
    desc: "We immersed into the business life of  MTN Me2U agents, noting that it’s likely   a dying career and we are dedicated to    learn more dedicated to supporting them. ",
    link: " https://www.youtube.com/watch?v=sCsI32 j3mmw",
    image: "./images/hunt.png",
  },
  {
    id: "Launch Your Mission",
    desc: "An interesting story of an ambitious   African woman. We challenged ourselves to tell the story driven by the power of telling victorious stories and for the love and strong hopes in Africa. ",
    link: " https://www.youtube.com/watch?v=sCsI32j3mmw",
    image: "./images/target.png",
  },
];

const popBtns = document.querySelectorAll(".pop-btn");

const pop = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");

popBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const activeChal = challenges.filter(
      (chal) =>
        chal.id.toLowerCase().trim() === btn.textContent.toLowerCase().trim()
    )[0];

    const htmlEl = ` <div class="popup rounded p-1">
       <div
         class="closebtn text-2xl text-right m-5 text-red-400 hover:cursor-pointer hover:text-red-700"
       >
         <i class="fa fa-times" aria-hidden="true"></i>
       </div>
       <div class="flex p-12 space-x-24">
         <img class="w-52 h-52" src="${activeChal.image}" alt="" />
         <div class="space-y-3">
           <div class="space-y-10">
             <h3 class="text-red-400 font-bold text-3xl">${activeChal.id}</h3>
             <p class="font-extralight">
             ${activeChal.desc}
             </p>
           </div>
           <div>
             <a
               target="_blank"
               class="text-red-400"
               href="${activeChal.link}"
               >View on Youtube</a
             >
           </div>
         </div>
       </div>
     </div>`;

    popupContainer.innerHTML = htmlEl;
    popupContainer.style.display = "flex";
    const closePopup = document.querySelector(".closebtn");
    closePopup.addEventListener("click", () => {
      popupContainer.style.display = "none";
    });
  });
});
