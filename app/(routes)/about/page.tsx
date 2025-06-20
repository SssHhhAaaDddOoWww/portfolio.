import Clock from "@/components/ShowTime";
import TypedText from "@/components/Typedtext";
import { Badge } from "@/components/ui/badge";


export default function about(){
      return <div className="p-2 mt-[20px]">
         <div >
            <TypedText/>
            <p className="text-wrap mt-[5px]"> Full-stack developer, still learning.
            Focused on building functional web apps with modern tools like React, Next.js, Node.js, and MongoDB.</p>
         </div>
         <div className="mt-[30px]">
            <p className="text-xl font-bold border-b-2  border-foreground p-1 ">Tech Stack  </p>
          <div className="mt-[20px] bg-accent p-3 rounded-[10px] flex flex-wrap ">
         <span className="border-b-2 border-foreground ">Frontend </span> 
         <Badge className="mx-[10px]">React</Badge>
         <Badge  className="mx-[10px]">Next js</Badge>
         <Badge className="mx-[10px]">Tailwind</Badge>
         <Badge  className="mx-[10px]">Shadecn</Badge>
            
          </div>
          <div className="mt-[20px] bg-accent p-3 rounded-[10px] flex flex-wrap ">
         <span className="border-b-2 border-foreground">Backend & DB </span> 
         <Badge className="mx-[10px]">Node JS</Badge>
         <Badge  className="mx-[10px]">Typescript</Badge>
         <Badge className="mx-[10px]">Express</Badge>
         <Badge  className="mx-[10px]">Mongo DB</Badge>
            
          </div>
         </div>
         <div className="mt-[30px]  ">
         <p className="font-bold text-xl border-b-2 border-foreground "> to Connect</p>
          <div className="flex gap-5 mt-[10px] p-2">
            <a className="hover:border-b-2 border-foreground"  href=" https://x.com/dixxhant">@X</a>
            <a className="hover:border-b-2 border-foreground"  href="https://github.com/SssHhhAaaDddOoWww">@github</a>
     
          </div>
         </div>
         <div className="flex justify-center mt-[100px]">
         <span className=""><Clock/></span>

         </div>

        </div>
               
      
}


//        
