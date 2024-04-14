export function filterButtonTemplate({ categoryValue, categoryLabel }) {
  return `
    <li>
        <button
          class="filter-list__button"
          type="button"
          data-filter="${categoryValue}"
        >
          ${categoryLabel}
        </button>
    </li>
    `;
}
