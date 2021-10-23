import React from "react";

const data ={
    "data": {
        "login": {
            "devices": {
                "total": 4,
                "hasMore": false,
                "items": [
                    {
                        "id": "80:00:00:00:01:1B:A2:2B",
                        "name": "HPLaptop15da0xxx1e93fed3",
                        "hardwareId": "80:00:00:00:01:1B:A2:2B",
                        "created": "2021-10-01T17:39:47.327Z",
                        "state": "active"
                    },
                    {
                        "id": "80:00:00:00:01:1B:5D:6B",
                        "name": "koladev-root",
                        "hardwareId": "80:00:00:00:01:1B:5D:6B",
                        "created": "2021-09-16T14:11:21.763Z",
                        "state": "inactive"
                    },
                    {
                        "id": "80:00:00:00:01:1B:76:90",
                        "name": "raspberrypi",
                        "hardwareId": "80:00:00:00:01:1B:76:90",
                        "created": "2021-09-22T16:40:56.230Z",
                        "state": "inactive"
                    },
                    {
                        "id": "80:00:00:00:01:1B:BC:8E",
                        "name": "raspi1",
                        "hardwareId": "b8:27:eb:64:30:bd-eaGjDjkQETHeto9duzdn",
                        "created": "2021-10-07T16:11:06.237Z",
                        "state": "inactive"
                    }
                ]
            }
        }
    }

}

const dataEvents = {
    "data": {
        "login": {
            "events": {
                "hasMore": false,
                "total": 4,
                "items": [
                    {
                        "type": "DEVICE_CONNECT",
                        "owner": {
                            "email": "XXX@gmail.com"
                        },
                        "actor": {
                            "email": "actor@remote.it"
                        },
                        "target": [
                            {
                                "created": "2021-03-24T09:56:16.873Z",
                                "id": "80:XX:00:00:01:0A:FF:00",
                                "name": "ssh"
                            }
                        ],
                        "users": [],
                        "timestamp": "2021-07-16T20:53:59.644Z"
                    },
                    {
                        "type": "DEVICE_CONNECT",
                        "owner": {
                            "email": "owner@remote.it"
                        },
                        "actor": {
                            "email": "actor@remote.it"
                        },
                        "target": [
                            {
                                "created": "2021-03-24T09:56:16.873Z",
                                "id": "80:XX:00:00:01:0A:FF:00",
                                "name": "ssh"
                            }
                        ],
                        "users": [],
                        "timestamp": "2021-07-16T20:35:06.215Z"
                    },
                    {
                        "type": "DEVICE_CONNECT",
                        "owner": {
                            "email": "owner@remote.it"
                        },
                        "actor": {
                            "email": "actor@remote.it"
                        },
                        "target": [
                            {
                                "created": "2021-03-24T09:56:16.873Z",
                                "id": "80:XX:00:00:01:0A:FF:00",
                                "name": "ssh"
                            }
                        ],
                        "users": [],
                        "timestamp": "2021-07-16T20:20:41.601Z"
                    },
                    {
                        "type": "DEVICE_CONNECT",
                        "owner": {
                            "email": "owner@remote.it"
                        },
                        "actor": {
                            "email": "actor@remote.it"
                        },
                        "target": [
                            {
                                "created": "2021-03-24T09:56:16.873Z",
                                "id": "80:XX:00:00:01:0A:FF:00",
                                "name": "ssh"
                            }
                        ],
                        "users": [],
                        "timestamp": "2021-07-16T18:56:31.453Z"
                    }
                ]
            }
        }
    }
}
const Home = () => {
    return (
        <div>
            <div>
                <h3 className="h3">Number of devices: {data.data.login.devices.total}</h3>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">hardwareId</th>
                        <th scope="col">created</th>
                        <th scope="col">state</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.data.login.devices.items.map((device, index) => (
                            <tr>
                                <th scope="row">{device.id}</th>
                                <td>{device.name}</td>
                                <td>{device.hardwareId}</td>
                                <td>{device.created}</td>
                                <td>{device.state}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className="h3">Number of events: {dataEvents.data.login.events.total}</h3>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Actor</th>
                        <th scope="col">Target Name</th>
                        <th scope="col">Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        dataEvents.data.login.events.items.map((event, index) => (
                            <tr>
                                <th scope="row">{event.type}</th>
                                <td>{event.owner.email}</td>
                                <td>{event.actor.email}</td>
                                <td>{event.target.map((target, index) => (
                                    <p>{target.name} |</p>
                                ))}</td>
                                <td>{event.timestamp}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
