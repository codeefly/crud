import React from "react";
import Avatar from "react-avatar";
import Link from 'next/link'

const Contact = ({ abc }) => {
    const { id, name, phone, email } = abc;
    return (
        <>
            <tr key={id}>
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
                    <Link href="/add-contact"><a><i class="material-icons">edit</i></a></Link>
                    <i class="material-icons">remove_circle</i>
                </td>
            </tr>
        </>
    );
};

export default Contact;
