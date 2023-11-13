interface Comment {
  id: number;
  idComentary: number | null;
  date: string;
  text: string;
}

const comments = [
  { id: 1, idComentary: null, date: "2023-11-10", text: "Primer comentario." },
  {
    id: 2,
    idComentary: 1,
    date: "2023-11-11",
    text: "Respuesta al primer comentario.",
  },
  {
    id: 3,
    idComentary: 2,
    date: "2023-11-12",
    text: "Respuesta al segundo comentario.",
  },
  {
    id: 4,
    idComentary: null,
    date: "2023-11-13",
    text: "Otro comentario independiente.",
  },
  {
    id: 5,
    idComentary: 3,
    date: "2023-11-14",
    text: "Respuesta al tercer comentario.",
  },
  {
    id: 6,
    idComentary: 4,
    date: "2023-11-15",
    text: "Respuesta al cuarto comentario.",
  },
  // Agrega más comentarios según sea necesario
] as Comment[];

function filterComments(
  value: number | null,
  comments: Comment[],
  comment: Comment | null
): any {
  const filteredList = comments.filter((item) => item.idComentary === value);

  if (value === null) {
    return filteredList.map((item) => filterComments(item.id, comments, item));
  } else if (filteredList.length > 0) {
    return {
      comment,
      children: filteredList.map((item) =>
        filterComments(item.id, comments, item)
      ),
    };
  } else {
    return {
      comment,
      children: false,
    };
  }
}

function mainFilter(comments: Comment[]) {
  const data = filterComments(null, comments, null);
  console.dir(data, { depth: null });
  // or
  // console.log(JSON.stringify(data, null, 2));
}

mainFilter(comments);
