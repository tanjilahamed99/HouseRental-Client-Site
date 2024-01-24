import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const UseMyBookingData = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = useContext(AuthContext)

    const { data: myBookingData, refetch } = useQuery({
        queryKey: ['bookingData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myBooking/${user?.email}`)
            return res.data
        }
    })

    return [myBookingData, refetch]
};

export default UseMyBookingData;