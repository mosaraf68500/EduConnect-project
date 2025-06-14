import React, { Suspense, use } from 'react';
import { AuthContex } from '../../Contex/AuthContex';

import Loading from '../../LoadingPage/Loading';
import MyTutorialList from './MyTutorialList';
import { MyTutorialsPromise } from '../../../api/MyTutorialApi';

const MyTutorials = () => {
    const {user}=use(AuthContex);
    
    // const allTutorials=use(MyTutorialsPromise);
    // console.log(allTutorials)
    return (
        <div className='py-10 my-4 bg-white text-center'>
            
            
           
            <Suspense fallback={<Loading></Loading>}>
            <MyTutorialList MyTutorialsPromise={MyTutorialsPromise(user.email,user.accessToken)} >

            </MyTutorialList>

            </Suspense>
        </div>
    );
};

export default MyTutorials;