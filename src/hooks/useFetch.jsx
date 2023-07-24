import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.log(err));
  }, [url]);

  return [colleges];
};

export default useFetch;
