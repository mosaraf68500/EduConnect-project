import React, { Suspense, use } from 'react';
import { AuthContex } from '../../Contex/AuthContex';

import Loading from '../../LoadingPage/Loading';
import MyTutorialList from './MyTutorialList';
import { MyTutorialsPromise } from '../../../api/MyTutorialApi';

const MyTutorials = () => {
    const {user}=use(AuthContex);
    //   console.log("token",user.accessToken)
    // console.log(MyTutorialsPromise)
    return (
        <div>
            <h1>my tutorials</h1>
           
            <Suspense fallback={<Loading></Loading>}>
            <MyTutorialList MyTutorialsPromise={MyTutorialsPromise(user.email,user.accessToken)} >

            </MyTutorialList>

            </Suspense>
        </div>
    );
};

export default MyTutorials;