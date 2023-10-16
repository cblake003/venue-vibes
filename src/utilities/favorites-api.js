import sendRequest from "./send-request";
const BASE_URL = "/api/favorites";

export async function addFavorite(result) {
    return await sendRequest(`${BASE_URL}/create`, "POST", {result})
}

export async function getAll() {
    return await sendRequest(BASE_URL)
}

// export async function deleteEvent(result) {
//     return async function (`${BASE_URL}/${id}`, "DELETE", { result })
// }