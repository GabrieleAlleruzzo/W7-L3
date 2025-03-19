let getBooks = function () {
  const urlBooks = "https://striveschool-api.herokuapp.com/books";

  fetch(urlBooks)
    .then((data) => {
      if (data.ok) {
        console.log("good ending", data);
        return data.json();
      } else {
        throw new error("errore 0");
      }
    })
    .then((dati) => {
      console.log("libriii", dati);
    })
    .catch((err) => {
      console.log("bad ending");
    });
};

getBooks();
