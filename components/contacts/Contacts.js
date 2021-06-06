import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts() {
    const contacts = useSelector((state) => state.contacts);
    console.log(contacts);
    return (
        <>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                <div className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                    />
                                    <label className="custom-control-label"></label>
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
                            <Contact abc={abc} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Contacts;