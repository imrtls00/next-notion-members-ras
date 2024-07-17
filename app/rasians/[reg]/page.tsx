import React from 'react';
import MemberDetails from '../components/MemberDetails';

const Page = ({ params }: any) => {

    return (
        <div>
            <h1>Member Page # {} </h1>
            <MemberDetails reg={params.reg} />
        </div>
    );
};

export default Page;