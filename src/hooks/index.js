import { useEffect, useState } from "preact/hooks";
import { h } from "preact";
import axios from "axios";
const UseSearchText = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://api.unsplash.com/search/photos",
      params: {
        query: query,
        page: pageNumber,
        client_id: "Iqho3YeLoZWfbSNOhCyFtbEth4ilRtjypW2S8tjvVco",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log("got the data");
        console.log(res.data.results);
        console.log("print", res.results);
        setBooks((prevBooks) => {
          return [
            ...prevBooks,
            ...res.data.results.map((b) => b.links.download),
          ];
        });
        setHasMore(res.data.results.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        if (axios.isCancel(e)) return;
        console.log("found an error");
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  console.log("return value", books);
  return { loading, error, books, hasMore };
};

export default UseSearchText;
