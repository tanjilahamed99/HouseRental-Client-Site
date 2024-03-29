import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import auth from "../Utility/Firebase";
import { updateProfile } from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";


const SignUp = () => {

    const [see, setSee] = useState(true)
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()


    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const number = form.number.value
        const role = form.role.value
        const password = form.password.value
        const purchaseNumber = 2

        const newUser = {
            name, email, number, role,purchaseNumber
        }

        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    Swal.fire(
                        'Good job!',
                        'Create account Successful!',
                        'success'
                    )
                    axiosPublic.post('/users', newUser)
                        .then(res => {
                            console.log(res.data)
                        })
                    location.state ? navigate(location.state) : navigate('/')

                }).catch(() => { })
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })


    }



    return (
        <div className="hero min-h-screen bg-base-200 bg-center bg-cover bg-[url(https://i.ibb.co/XF74Hc8/jason-briscoe-e-Lf-QTm-Df-Lk-unsplash.jpg)]" >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content w-full flex-col">
                <div className="card md:w-[50%] lg:w-[40%]">
                    <h2 className="text-center font-bold text-2xl mb-1 text-white">Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body shadow-2xl shadow-gray-400">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control mt-5">
                            <select name="role" required className="select select-bordered w-full ">
                                <option disabled selected>Role</option>
                                <option selected>House Owner </option>
                                <option>House Renter</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Number</span>
                            </label>
                            <input name="number" type="number" placeholder="Number" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name="password" type={see ? "password" : 'text'} placeholder="password" className=" p-4 rounded-md border-b-4" required />
                            {
                                see ? <FaEyeSlash onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-5 right-5"></FaEyeSlash>
                                    : <FaEye onClick={() => setSee(!see)} className="absolute text-xl text-black bottom-5 right-5"></FaEye>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white">Create Account</button>
                        </div>
                        <Link to={'/login'}><p className="text-white">Already have account? <span className="font-bold">Login</span></p></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;