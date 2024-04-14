const siteNavListRef = document.querySelector("#site-nav-list");

(() => {
  const { pathname } = location;

  if (pathname.endsWith("/") || pathname.endsWith("/index.html")) {
    siteNavListRef
      .querySelector("[data-page='studio']")
      ?.classList.add("site-nav__link--active");
  } else if (pathname.endsWith("/portfolio.html")) {
    siteNavListRef
      .querySelector("[data-page='portfolio']")
      ?.classList.add("site-nav__link--active");
  }
})();

siteNavListRef.addEventListener("click", (e) => {
  const { pathname } = location;

  if (
    (pathname.endsWith("/") || pathname.endsWith("/index.html")) &&
    e.target.dataset["page"] === "studio"
  ) {
    e.preventDefault();
    return;
  }

  if (
    pathname.endsWith("/portfolio.html") &&
    e.target.dataset["page"] === "portfolio"
  ) {
    e.preventDefault();
    return;
  }
});
