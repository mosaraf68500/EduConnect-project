// src/pages/FindTutorials/FindToturs.jsx

import React, { useEffect, useState } from 'react';
import Loading from '../../LoadingPage/Loading';
import AllTutorials from './AllTutorials';

const FindToturs = () => {
    const [search, setSearch] = useState(""); // Controlled search
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/find-all-tutorials?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setTutorials(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [search]);
    console.log(search)

    if (loading) return <Loading />;

    return (
        <div className="py-10 bg-[#F0FBF8]">
            <AllTutorials 
                tutorials={tutorials} 
                setSearch={setSearch} 
                search={search} // Pass the current search value
            />
        </div>
    );
};

export default FindToturs;
