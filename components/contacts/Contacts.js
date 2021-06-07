import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import {
    selectAllContact,
    clearAllContact,
    deleteAllContact,
} from "../../redux/actions/actionCreator";
function Contacts() {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);

    const contacts = useSelector((state) => state.contact.contacts);
    const selectedContacts = useSelector(
        (state) => state.contact.selectedContacts
    );

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        } else {
            dispatch(clearAllContact());
        }
    }, [selectAll]);
    return (
        <>
            <div className="container">
                <Link href="/add-contact">
                    <a className="btn btn-primary">Create</a>
                </Link>

                {selectedContacts.length > 0 ? (
                    <button class="btn btn-danger" onClick={()=> dispatch(deleteAllContact())}>Delete All</button>
                ) : null}
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <div className="custom-checkbox">
                                    <input
                                        id="selectAll"
                                        type="checkbox"
                                        className="custom-control-input"
                                        value={selectAll}
                                        onClick={() => setSelectAll(!selectAll)}
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="custom-control-label"
                                    ></label>
                                </div>
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((abc) => (
                            <Contact
                                abc={abc}
                                key={abc.id}
                                selectAll={selectAll}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Contacts;
