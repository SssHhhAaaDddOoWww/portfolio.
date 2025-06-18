
import Navbar from "@/components/Navbar"
export default function layout({children}:{children:React.ReactNode}){
    return <div className="flex justify-center h-screen items-center font-mono" >
    <div className=" w-[800px] h-[750px]" >
  <Navbar/>
      {children}
    </div>
    </div>
    

}