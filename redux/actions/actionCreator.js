
import { CREATE_CONTACT } from "./actionTypes";
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    };
};
