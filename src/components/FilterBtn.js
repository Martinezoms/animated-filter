import { useEffect } from "react";

const FilterBtn = ({ popular, setFiltered, acitveGenre, setAcitveGenre }) => {
  const filters = [
    { title: "All", id: 0 },
    { title: "Actions", id: 28 },
    { title: "Comedy", id: 35 }
  ];

  useEffect(() => {
    if (acitveGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtering = popular.filter((movie) => movie.genre_ids.includes(acitveGenre));

    setFiltered(filtering);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acitveGenre]);

  return (
    <div className="filter-container">
      {filters.map((item) => (
        <button
          key={item.id}
          className={acitveGenre === item.id ? "active" : ""}
          onClick={() => setAcitveGenre(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default FilterBtn;
