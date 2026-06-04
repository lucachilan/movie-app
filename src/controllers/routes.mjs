import { loadMovies } from "./movieDisplay.mjs";

/**
 * Client-side route definitions.
 * Maps URL pathnames to their page initialization functions.
 */
const routes = {
    "/": loadMovies,
    "/index.html": loadMovies,
};

/**
 * Initializes the correct page handler based on the current URL path.
 */
export function initRoute() {
    const path = window.location.pathname;
    const handler = routes[path];

    if (handler) {
        handler();
    }
}

// Auto-initialize on module load
initRoute();
