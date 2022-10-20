import genres from './genres.json'

const Genres = ({setTitle}) => {
    const onClickHandler = (id) => {
        setTitle({ name: "", search: "/discover/movie", query: `&with_genres=${id}` });
      };
  return (
    <ul className="genre_container">
    {genres.map((g) => (
      <li
        key={g.id}
        onClick={(event) => {
          event.preventDefault();
          onClickHandler(g.id);
        }}
      >
        {g.name}
      </li>
    ))}
  </ul>
  );
};

export default Genres;