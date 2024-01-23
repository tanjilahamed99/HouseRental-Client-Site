import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseMyHousesData = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useContext(AuthContext)

    const { data: myHousesData,refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myHouse/${user?.email}`)
            return res.data
        }
    })

    return [myHousesData,refetch]
};

export default UseMyHousesData;