import React, { use } from 'react';
import TutorialCard from './TutorialCard';

const AllTutorials = ({TutorialsPromise}) => {
    const tutorials=use(TutorialsPromise)
    
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                tutorials.map(tutorial=><TutorialCard tutorial={tutorial} key={tutorial._id}></TutorialCard>)
            }
        </div>
    );
};

export default AllTutorials;