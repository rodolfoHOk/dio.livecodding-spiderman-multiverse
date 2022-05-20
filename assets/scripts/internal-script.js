function changeFromPageToPage(from, to) {
  const currentPage = document.querySelector(`#page${to}`);

  if (to > from) {
    currentPage.classList.add("animate-bottom");

    setTimeout(() => {
      currentPage.classList.remove("animate-bottom");

      window.location = `#page${to}`;
    }, 500);
  } else {
    currentPage.classList.add("animate-top");

    setTimeout(() => {
      currentPage.classList.remove("animate-top");

      window.location = `#page${to}`;
    }, 500);
  }
}
