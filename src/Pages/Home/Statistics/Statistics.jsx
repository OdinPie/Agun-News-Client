import React from 'react';
import CountUp from 'react-countup';
import useUsers from '../../../Hooks/useUsers'
const Statistics = () => {
    const users = useUsers();
    return (
        <div>
            <CountUp end={users[0].length} duration={2.75} />
        </div>
    );
};

export default Statistics;