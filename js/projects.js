import { projectCardTemplate } from "./templates/project-card.js";
import { filterButtonTemplate } from "./templates/filter-button.js";
import { projectsData } from "./data/projects-data.js";
import { projectCategoriesData } from "./data/project-categories-data.js";

const projectsListRef = document.getElementById("projects");
const filtersListRef = document.getElementById("filters");

const activeFilterButtonClass = "filter-list__button--active";

let currentFilterValue = null;

(() => {
  const filterButtonsMarkup = createFilterButtonsMarkup(projectCategoriesData);
  filtersListRef.innerHTML = filterButtonsMarkup;
})();

(() => {
  const { search } = location;
  const searchParams = search.slice(1).split("&");
  const filterSearchParam = searchParams.find((searchParam) => {
    const [key, _] = searchParam.split("=") ?? ["", ""];
    return key === "filter";
  });

  let [_, filterValue] = filterSearchParam?.split("=") ?? ["", ""];

  if (!filterValue) {
    filterValue = "all";
  }

  filtersListRef
    .querySelector(`[data-filter="${filterValue}"]`)
    ?.classList.add(activeFilterButtonClass);

  currentFilterValue = filterValue;
  changeFilterSearchParam(filterValue);
  const filteredProjectsData = getFilteredProjectsData(filterValue);
  const projectCardsMarkup = createProjectCardsMarkup(filteredProjectsData);
  projectsListRef.innerHTML = projectCardsMarkup;
})();

filtersListRef.addEventListener("click", (e) => {
  const filterValue = e.target.dataset["filter"];

  if (!filterValue || currentFilterValue === filterValue) return;

  currentFilterValue = filterValue;
  changeFilterSearchParam(filterValue);

  filtersListRef
    .querySelectorAll("[data-filter]")
    .forEach((btn) => btn.classList.remove(activeFilterButtonClass));

  e.target.classList.add(activeFilterButtonClass);

  const filteredProjectsData = getFilteredProjectsData(filterValue);
  const projectCardsMarkup = createProjectCardsMarkup(filteredProjectsData);
  projectsListRef.innerHTML = projectCardsMarkup;
});

function getFilteredProjectsData(filterValue) {
  return filterValue === "all"
    ? projectsData
    : projectsData.filter(({ categoryValue }) => categoryValue === filterValue);
}

function changeFilterSearchParam(filterValue) {
  const params = new URLSearchParams();
  params.append("filter", filterValue);

  const { origin, pathname, hash } = location;

  const newUrl = `${origin}${pathname}?${params.toString()}${hash}`;
  window.history.pushState({}, "", newUrl);
}

function createFilterButtonsMarkup(projectsData) {
  return projectsData.map(filterButtonTemplate).join("");
}

function createProjectCardsMarkup(projectsData) {
  return projectsData.map(projectCardTemplate).join("");
}
