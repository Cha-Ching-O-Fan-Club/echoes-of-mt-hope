// import { siteClues } from "./site-clues.js";

export const loadUnfoundSites = (container) => {
  const sites = LOCATIONS
    .map(({ clues, completed, name }) => {
      if (completed) {
        return "";
      }

      const cluesList = clues
        .map((clue) => `<li class="clue">${clue}</li>`)
        .join("");
      return `
      <li class="unfound-site-listing">
        <h3 class="site-title">
        ${name}
        <button class="expand-listing">
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        </h3>
        <ul class="clues">
          ${cluesList}
        </ul>
      </li>
    `;
    })
    .join("");

  container.innerHTML = sites;

  const closeListings = () => {
    const listings = container.querySelectorAll(".unfound-site-listing");
    listings.forEach((listing) => {
      listing.classList.remove("expanded");
    });
  }

  const listings = container.querySelectorAll(".unfound-site-listing");
  listings.forEach((listing) => {
    listing.querySelector(".expand-listing").addEventListener("click", () => {
      if (listing.classList.contains("expanded")) {
        listing.classList.remove("expanded");
        return;
      }
      closeListings();
      listing.classList.add("expanded");
    });
  });
};

export const loadFoundSites = (container) => {
  const sites = LOCATIONS
    .map(({completed, icon}) => {
      if (!completed) {
        return "";
      }

      return `
      <li class="found-site-icon">
        ${icon}
      </li>
    `;
    })
    .join("");

  container.innerHTML = sites;
}