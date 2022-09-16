import { h } from "preact";
import { useState, useRef, useCallback } from "preact/hooks";
import UseSearchText from "../../hooks/";
import style from "./index.css";
const LazyLoading = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, books, hasMore } = UseSearchText(query, pageNumber);
  const [isInput, setIsInput] = useState(false);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log("visible");
        }
      });
      if (node) {
        observer.current.observe(node);
      }
      console.log(node);
    },
    [loading, hasMore]
  );
  const handleSearch = (e) => {
    setIsInput(true);
    setQuery(e.target.value);
    setPageNumber(1);
  };
  console.log(loading, error, books, hasMore);
  return (
    <div class={style.lazyLoadMainContainer}>
      <p>Loading lazy</p>
      <input type="text" value={query} onChange={handleSearch} />
      <div class={isInput ? style.mainImageContainer : null}>
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div key={index} ref={lastBookElementRef}>
                <img class={style.imageClass} src={book} />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <img class={style.imageClass} src={book} />
              </div>
            );
          }
        })}
      </div>
      <div> {loading && "Loading.."}</div>
      <div> {error && "Error.."}</div>
    </div>
  );
};

export default LazyLoading;
