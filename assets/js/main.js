import { loadClues } from "./load-clues.js";

(() => {
  const unfoundSitesContainer = document.querySelector("#unfound-sites-list");
  loadClues(unfoundSitesContainer);
})();