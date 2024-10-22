import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { deleteContact } from "~/data";

export const action = async ({params}: ActionFunctionArgs) => {
    invariant(params.contacId, "El id de contacto no es valido");
    await deleteContact(params.contacId);
    return redirect("/");
}

