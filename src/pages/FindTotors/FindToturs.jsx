import React, { useEffect, useState } from 'react';
import Loading from '../../LoadingPage/Loading';
import AllTutorials from './AllTutorials';
import { useLocation } from 'react-router';

const FindToturs = () => {
    const location = useLocation();
    const [search, setSearch] = useState(location?.state?.searchText || "");
    const [tutorials, setTutorials] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        fetch(`http://localhost:5000/find-all-tutorials?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setTutorials(data);
                // setLoading(false);
            })
            .catch(err => {
                console.error(err);
                // setLoading(false);
            });
    }, [search]);

    // if (loading) return <Loading />;

    return (
        <div className="py-10 bg-[#F0FBF8]">
            <AllTutorials setSearch={setSearch} search={search} tutorials={tutorials} />
        </div>
    );
};

export default FindToturs;
