import React, { use } from 'react';
import TutorialsRow from './TutorialsRow';

const MyTutorialList = ({MyTutorialsPromise}) => {
    const Tutorials = use(MyTutorialsPromise);
  console.log(Tutorials);
    return (
        <div>
             <div>
            <h3 className="text-3xl">my tutorial: {Tutorials.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {Tutorials.length+1}
                            </th>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Tutorials.map((tutorial, index) =><TutorialsRow
                            key={tutorial._id}
                            index ={index}
                            tutorial={tutorial}

                            
                            ></TutorialsRow> )
                        }
                    </tbody>
                    
                </table>
            </div>

        </div>
        </div>
    );
};

export default MyTutorialList;



