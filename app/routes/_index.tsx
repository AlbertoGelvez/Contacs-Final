import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getContacts } from "~/data";

export const loader = async () => {
const contacts = await getContacts();
if(contacts[0]){
const contacId = contacts[0].id;
return redirect(`contacts/${contacId}`)
}
return "";
}
export default function Index() {
useLoaderData<typeof loader>();
return (
<p id="index-page">
This is a demo for Remix.
<br />
Check out{" "}
<a href="https://remix.run">the docs at remix.run</a>.
</p>
);
}