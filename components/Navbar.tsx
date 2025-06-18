import Link from "next/link"
import { ModeToggle } from "./Mode-toggle"

export default function Navbar(){
 return  <div className="flex justify-center items-center gap-2 ">
      <Link className="mx-[10px] hover:border-b-2 border-foreground"  href="/about">@about</Link>
      <Link className="mx-[10px] hover:border-b-2 border-foreground " href="/projects">@projects</Link>
        

        
        <div className="ml-auto p-2 mr-[20px]  "> 
        

        <ModeToggle/></div>  
       </div>
      
      
      

    
    
 
  
    
}