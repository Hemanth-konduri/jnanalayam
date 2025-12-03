import Image from "next/image";

const UserCard = ({type}:{type:String}) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
        <div className="flex items-center justify-between">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
                2024/25

            </span>
            <Image src="/more.png" alt="more" width={20} height={20} />
        </div>
        <div className="mt-4">
            
            <h2 className=" text-2xl font-bold mt-2">1,250</h2>
            <span className="text-gray-500 text-sm font-medium capitalize">{type as string}s</span>

        </div>

    </div>
  )
}

export default UserCard