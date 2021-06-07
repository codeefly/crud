import Link from "next/link";
import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions/actionCreator";

const Contact = ({ abc, selectAll }) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = abc;
    return (
        <>
            <tr>
                <th>
                    <div className="custom-checkbox">
                        <input
                            checked={selectAll}
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
                    <Link href={`/edit-contact/${id}`}>
                        <a>
                            <i className="material-icons">edit</i>
                        </a>
                    </Link>
                    <span onClick={() => dispatch(deleteContact(id))}>
                        <i className="material-icons">remove_circle</i>
                    </span>
                </td>
            </tr>
        </>
    );
};

export default Contact;
