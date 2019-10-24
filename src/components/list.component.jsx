import React, { shallowEqual } from "react";
import { useSelector } from "react-redux";
import { List, Avatar } from 'antd';
import "antd/dist/antd.css";
import avatar from '../assets/img/avatar.jpg';

const COLLECTION = 'user';

const SecondTable = () => {

    const { users } = useSelector(state => ({
        users: state[COLLECTION].users,
    }), shallowEqual);

    if (Object.entries(users).length === 0) {
        return (
            <div/>
        )
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={user => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={avatar} />}
                        title={<a href="https://ant.design">{user.first_name} {user.last_name}</a>}
                        description={<p> Born on <b>{user.birthday}</b>. {user.first_name} is <b>{user.age} </b>
                            years old and loves <b>{(user.hobby).toLocaleLowerCase()}</b>.</p>}
                    />
                </List.Item>
            )}
        />
    )
};

export default SecondTable;
