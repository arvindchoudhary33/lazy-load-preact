import { h } from "preact";
import { useState, useRef, useCallback } from "preact/hooks";
import UseSearchText from "../../hooks/";
const LazyLoading = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, books, hasMore } = UseSearchText(query, pageNumber);
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
    setQuery(e.target.value);
    setPageNumber(1);
  };
  console.log(loading, error, books, hasMore);
  return (
    <div style="margin-top:200px">
      <p>Loading lazy</p>
      <input type="text" value={query} onChange={handleSearch} />
      <div>
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={index}>
                <img style="height:100px; width:100px;" src={book} />
              </div>
            );
          } else {
            return (
              <div key={book}>
                <img style="height:100px; width:100px" src={book} />
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
