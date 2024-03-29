import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseUserRole = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useContext(AuthContext)

    const { data: role } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/role/${user?.email}`)
            return res.data
        }
    })
    return [role]
};

export default UseUserRole;