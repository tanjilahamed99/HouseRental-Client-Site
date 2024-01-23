import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseAllHouseData = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: allHouseData } = useQuery({
        queryKey: ['houseData'],
        queryFn: async () => {

            const res = await axiosPublic.get('/allHouse')
            return res.data
        }
    })

    return [allHouseData]
};

export default UseAllHouseData;