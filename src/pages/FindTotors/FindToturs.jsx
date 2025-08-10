import React, { useEffect, useState } from "react";
import Loading from "../../LoadingPage/Loading";
import AllTutorials from "./AllTutorials";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

const FindToturs = () => {
  const location = useLocation();
  const [search, setSearch] = useState(location?.state?.searchText || "");
  const [tutorials, setTutorials] = useState([]);
  const [sortPrice, setSortPrice] = useState("");

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    fetch(
      `https://edu-connect-server-side.vercel.app/find-all-tutorials?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Sort the data here based on sortPrice
        let sortedData = [...data];
        if (sortPrice === "low-to-high") {
          sortedData.sort((a, b) => a.price - b.price);
        } else if (sortPrice === "high-to-low") {
          sortedData.sort((a, b) => b.price - a.price);
        }
        setTutorials(sortedData);
        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setLoading(false);
      });
  }, [search, sortPrice]); // sortPrice add here so that sorting updates on change

  // if (loading) return <Loading />;

  return (
    <div className="py-10  bg-[#F0FBF8]">
      <Helmet>
        <title>Find Tutors</title>
      </Helmet>
      <AllTutorials
        setSearch={setSearch}
        search={search}
        tutorials={tutorials}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
    </div>
  );
};

export default FindToturs;
