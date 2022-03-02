import { useFormik, Field, Form } from "formik";
let users = [];
const Registration = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: ""
        },
        onSubmit(values) {
            console.log("form Submit");
            if (localStorage.getItem("users")) {
                users = JSON.parse(localStorage.getItem("users"));
                let user = {
                    Email: formik.values.email,
                    Username: formik.values.username,
                    Password: formik.values.password
                }
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
            }
            else {
                let user = {
                    Email: formik.values.email,
                    Username: formik.values.username,
                    Password: formik.values.password,

                }
                users.push(user);
                let userToJson = JSON.stringify(users);
                localStorage.setItem("users", userToJson);
            }
            // if(localStorage.getItem("users")){
            //     let arr = JSON.parse(localStorage.getItem("users"));
            //     for(let value of Object.values(arr)){
            //         document.querySelector("tbody").innerHTML += `
            //         <tr>
            //             <td>${value.user_Name}</td>
            //             <td>${value.Date}</td>
            //             <td>${value.password}</td> 

            //         </tr>`;
            //     }
            // }
        },
        validate() {
            const errors = {};
            if (formik.values.email.length <= 6) {
                errors.email = "Should be more than 6 chracters";
            }
            if (formik.values.email.length >= 30) {
                errors.email = "Should be less than 30 chracters";
            }
            if (formik.values.username.length <= 4) {
                errors.username = "Should be more than 4 chracters";
            }
            if (formik.values.username.length >= 10) {
                errors.username = "Should be less than 10 chracters";
            }
            if (formik.values.password.length <= 5) {
                errors.password = "Should be more than 5 Characters"
            }
            if (formik.values.password.length >= 20) {
                errors.password = "Should be less than 20 characters"
            }
            return errors;
        },
    });
    console.log(formik);
    return (
        <div>
            <h1 className="text-center">Register as User</h1><hr className="col-6 mx-auto my-3 border border-info" />
            <form onSubmit={formik.handleSubmit} className="form-group col-lg-4 col-md-8 mx-auto" noValidate>
                <input type="email" name="email" className="form-control my-2" value={formik.values.email} placeholder="Enter Email Id" onChange={formik.handleChange} />
                <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                </div>
                <input type="text" name="username" className="form-control my-2" value={formik.values.username} placeholder="Enter Username" onChange={formik.handleChange} />
                <div className="text-danger">
                    {formik.errors.username ? formik.errors.username : null}
                </div>
                <input type="password" name="password" className="form-control my-2" value={formik.values.password} placeholder="Enter Password" onChange={formik.handleChange} />
                <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                </div>
                <button className="btn btn-primary col-3 my-3">Register</button>
            </form>
        </div>

    );
}
export default Registration;