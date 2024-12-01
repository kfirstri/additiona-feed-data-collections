/**
This file allows you to call backend APIs from your frontend of this app.
You can generate various API methods including GET, POST, PUT, and DELETE.
To learn more, check out our documentation: https://wix.to/Iabrrso

Here's how you can call your API from your frontend code:

import { httpClient } from '@wix/essentials';

function MyComponent() {
  const callMyBackend = async () => {
    const res = await httpClient.fetchWithAuth(`${import.meta.env.BASE_API_URL}/test-data-collection`);
    console.log(await res.text());
  };

  return <button onClick={callMyBackend}>Call backend GET function</button>;
};
*/

import { auth } from "@wix/essentials";
import { items, collections } from "@wix/data";

export async function GET(req: Request) {
  const elevated = auth.elevate(items.queryDataItems);
  const data = await elevated({
    dataCollectionId: "kfir",
  }).find();

  console.log("Log from GET.");
  console.log("data", data.items);

  return new Response("Response from GET.");
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Log POST with body:", data);
  return Response.json(data);
}
