export function projectCardTemplate({
  id,
  projectUrl,
  imgUrl,
  description,
  title,
  categoryLabel,
}) {
  return `
    <li>
      <a href="${projectUrl}" class="projects-list__link" data-id="${id}">
        <div class="projects-list__thumb">
          <img
            class="projects-list__img"
            loading="lazy"
            src="${imgUrl}"
            alt="${title}"
          />
          <div class="project-overlay">
            <p class="description project-overlay__description">
              ${description}
            </p>
          </div>
        </div>
        <div class="projects-list__content">
          <h2 class="title projects-list__title">
            ${title}
          </h2>
          <p class="description">${categoryLabel}</p>
        </div>
      </a>
    </li>
    `;
}
