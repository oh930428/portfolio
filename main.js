const type = new Typed(".typeing-text", {
  strings: ["오민석", "프론트엔드 개발자", "의사소통을 지향하는 개발자"],
  typeSpeed: 150,
  loop: true,
});

const projects = [
  {
    id: 1,
    title: "클라우드 홈페이지 만들기",
    category: "frontend",
    date: "2022.04.03",
    notionUrl: "https://oh930428@github.com",
    image:
      "https://image.shutterstock.com/image-photo/cloud-computing-concept-connect-businessman-260nw-586520003.jpg",
  },
  {
    id: 2,
    title: "클라우드 홈페이지 만들기",
    category: "frontend",
    date: "2022.04.03",
    notionUrl: "https://oh930428@github.com",
    image:
      "https://image.shutterstock.com/image-photo/cloud-computing-concept-connect-businessman-260nw-586520003.jpg",
  },
  {
    id: 3,
    title: "CookingStates: 요린이 탈출 프로젝트",
    category: "frontend",
    date: "2021.03.26",
    notionUrl:
      "https://www.notion.so/CookingStates-6b18d0065abb4ff1a3cffe90462b216c",
    image: "./imgs/projectImages/CookingStates.png",
  },
  {
    id: 4,
    title: "ASSIST: 편리한 풋살팀 관리 도우미 ",
    category: "mobile",
    date: "2021.12.22",
    notionUrl: "https://www.notion.so/ASSIST-48fcdd6aa4114c1bbebf798c496dbf76",
    image: "./imgs/projectImages/ASSIST.png",
  },
];

const tabButton = document.querySelectorAll(".category__btn");
const projectsContainer = document.querySelector(".projects_list");

window.addEventListener("DOMContentLoaded", function () {
  displayProjectLists(projects);
  displayProjectButtons();
});

function displayProjectLists(projects) {
  const displayProject = projects.map((project) => {
    return `
    <a
      href=${project.notionUrl}
      class="project"
      target="blank"
      data-type="front-end"
    >
      <img src=${project.image} alt=${project.title}>
      <div class="project__description">
        <h3>${project.title}</h3>
        <span>${project.date}</span>
      </div>
    </a>
    `;
  });
  projectsContainer.innerHTML = displayProject.join("");
}

function displayProjectButtons() {
  tabButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
      const projectCategory = projects.filter((project) => {
        if (project.category === category) {
          return project;
        }
      });
      if (category === "all") {
        displayProjectLists(projects);
      } else {
        displayProjectLists(projectCategory);
      }
    });
  });
}
