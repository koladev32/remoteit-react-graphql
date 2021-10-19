import React from 'react';
import { queryRemoteit, options, data, R3_ACCESS_KEY_ID, R3_SECRET_ACCESS_KEY, SIGNATURE_ALGORITHM, SIGNED_HEADERS, DEFAULT_PROFILE} from "./query";
const httpSignature = require("http-signature");
const https = require('https');
function App() {
    let req = https.request(options, (res: any) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on("data", (data: any) => {
            process.stdout.write(data);
        });
    });

    httpSignature.sign(req, {
        keyId: R3_ACCESS_KEY_ID,
        key: Buffer.from(R3_SECRET_ACCESS_KEY, "base64"),
        algorithm: SIGNATURE_ALGORITHM,
        headers: SIGNED_HEADERS.split(/\s+/),
    });


    req.on("error", (error: any) => {
        console.error(error);
    });

    req.write(data);
    req.end();
    return (
        <div>
            <div className="text-xl-center">Devices Dashboard</div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
