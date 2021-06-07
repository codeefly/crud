import Link from 'next/link';
import React from "react";
import Avatar from "react-avatar";

const Contact = ({ abc }) => {
    const { name, phone, email } = abc;
    return (
        <>
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
                <td>
                    <Avatar name={name} size="45" round={true} /> {name}
                </td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <Link href="/add-contact"><a><i className="material-icons">edit</i></a></Link>
                    <i className="material-icons">remove_circle</i>
                </td>
            </tr>
        </>
    );
};

export default Contact;
