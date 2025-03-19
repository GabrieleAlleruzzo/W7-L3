let getBooks = function () {
  const urlBooks = "https://striveschool-api.herokuapp.com/bookspalle";

  fetch(urlBooks)
    .then((data) => {
      if (data.ok) {
        console.log("bho libri", data);
      } else {
        throw new error("boja-de");
      }
    })
    .catch((err) => {
      console.log("no libri");
    });
};

getBooks();
