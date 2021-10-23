import React from "react";
import useSWR from 'swr'
import {fetcher} from "./axios";


const devicesQuery = {
    query: `{
  login {
    email
    devices(size: 1000, from: 0) {
      total
      hasMore
      items {
        id
        name
        hardwareId
        created
        state
        services {
          id
          name
        }
      }
    }
  }
}
`
}

const eventsQuery = {
    query: `{
  login {
    events {
      hasMore
      total
      items {
        type
        owner {
          email
        }
        actor {
          email
        }
        target {
          created
          id
          name
        }
        users {
          email
        }
        timestamp
      }
    }
  }
}
`
}

const Home = () => {

    const dataDevices = useSWR('/graphql/v1', () => fetcher('/graphql/v1', devicesQuery));

    const dataEvents = useSWR('/graphql/v1', () => fetcher('/graphql/v1', eventsQuery));


    return (
        <div>
            <div>
                <h3 className="h3">Number of devices: {dataDevices.data?.data?.login?.devices.total}</h3>
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
                        dataDevices.data?.data?.login?.devices.items.map((device, index) =>
                            {
                                console.log(device);
                                return <tr>
                                    <th scope="row">{device.id}</th>
                                    <td>{device.name}</td>
                                    <td>{device.hardwareId}</td>
                                    <td>{device.created}</td>
                                    <td>{device.state}</td>
                                </tr>
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className="h3">Number of events: {dataEvents.data?.data?.login?.events?.total}</h3>
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
                        dataEvents.data?.data?.login?.events?.items?.map((event, index) => (
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
