import React, { Suspense } from 'react';
import Loading from '../../LoadingPage/Loading';
import AllTutorials from './AllTutorials';

const TutorialsPromise=fetch("http://localhost:5000/tutorials").then(res=>res.json())

const FindToturs = () => {
    return (
        <div className="py-10 bg-[#F0FBF8]">
            <h1>find tutors</h1>
            <Suspense fallback={<Loading></Loading>}>
            <AllTutorials TutorialsPromise={TutorialsPromise}></AllTutorials>

            </Suspense>
        </div>
    );
};

export default FindToturs;