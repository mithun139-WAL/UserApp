import { useState, useEffect } from "react";
const Members = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        let user = localStorage.getItem("Loggedusers");
        let arr = JSON.parse(localStorage.getItem("users"));
        arr.map((value, index) => {
            if (value.Username === user) {
                setEmail(value.Email);
                setUsername(value.Username);
                setPassword(value.Password);
            }
        })
    }, [])
    return (
        <div>
            <h3 className="text-center my-3">User Details</h3><hr className="col-4 mx-auto my-3 border border-info" />
            <ul className="list-group col-lg-4 col-md-8 mx-auto my-5">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item active">Username: {username}</li>
                <li className="list-group-item disabled">Password: {password}</li>
            </ul>
        </div>
    )
}
export default Members;