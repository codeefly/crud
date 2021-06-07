import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addContact } from "../redux/actions/actionCreator";

const Addcontacts = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        const new_Contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        };
        dispatch(addContact(new_Contact));
        router.push("/");
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Add a Contact</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => createContact(e)}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addcontacts;
