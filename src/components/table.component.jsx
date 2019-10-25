import React, { shallowEqual } from "react";
import { useSelector} from "react-redux";
import { Table, Spin, Divider } from 'antd';
import "antd/dist/antd.css";

const columns = [
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        render: text => <a>{text}</a>,
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
    },
    {
        title: 'User ID',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Invite</a>
        <Divider type="vertical" />
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Delete</a>
      </span>
        ),
    },
];

// choose which collection from the store to render
const COLLECTION = 'user';

const UsersTable = () => {

    const { users, dataLoading } = useSelector(state => ({
        users: state[COLLECTION].users,
        dataLoading: state[COLLECTION].dataLoading,
    }), shallowEqual);

    while (dataLoading) {
        return (
            <div className="spin-loading">
                <br/>
                <Spin size="large" />
                <br/>
            </div>
        )
    }

    return (
        <Table columns={columns} dataSource={users} rowKey="_id"/>
    )
};

export default UsersTable;
