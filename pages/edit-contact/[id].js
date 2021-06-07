import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../redux/actions/actionCreator";

const EditContacts = () => {
    const router = useRouter();
    const { id } = router.query;
    // alert(id)
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // const createContact = (e) => {
    //     e.preventDefault();
    //     const new_Contact = {
    //         id: shortid.generate(),
    //         name: name,
    //         phone: phone,
    //         email: email,
    //     };
    //     dispatch(addContact(new_Contact));
    //     router.push("/");
    // };

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email,
        });
       dispatch(updateContact(update_contact))
       router.push("/");
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Update Contact</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => onUpdateContact(e)}>
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
                            <button className="btn btn-warning" type="submit">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditContacts;
