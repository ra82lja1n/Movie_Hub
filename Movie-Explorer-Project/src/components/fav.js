export const getFav = () => {
  return JSON.parse(localStorage.getItem("favMovie")) || [];
};

export const addToFav = (movie) => {
  const favs = getFav();
  localStorage.setItem("favMovie", JSON.stringify([...favs, movie]));
};

export const removeFromFav = (id) => {
  const favs = getFav();
  const updated = favs.filter((m) => m.id !== id);

  localStorage.setItem("favMovie", JSON.stringify(updated));
};

export const isFav = (id) => {
  const favs = getFav();
  return favs.some((m) => m.id === id); // ek bhi match hua toh return true
};
