export const LOGO =
  "https://netflix-googleai.netlify.app/static/media/netflix-header-logo.774e8c1632ac9433608b.png";

export const USER_AVATAR =
  "https://movieflixa.netlify.app/static/media/user.b60c79044e6f79f58935.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://netflix-googleai.netlify.app/static/media/background-image.c85c74f4893003d35490.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;