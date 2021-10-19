export const queryRemoteit = `
{
  viewer {
    id
    bio
  }
}
`;

export const R3_ACCESS_KEY_ID = process.env.R3_ACCESS_KEY_ID;
export const R3_SECRET_ACCESS_KEY = process.env.R3_SECRET_ACCESS_KEY;

export const DEFAULT_PROFILE = "default";

export const SIGNATURE_ALGORITHM = "hmac-sha256";
export const SIGNED_HEADERS = "(request-target) host date content-type content-length";

export const utils = {
    query: `{ login { email  devices (size: 1000, from: 0) { items { id name services { id name} } } } }`,
};
export const data = JSON.stringify(utils);

export const options = {
    hostname: "api.remote.it",
    port: 443,
    path: "graphql/v1",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
    },
};

