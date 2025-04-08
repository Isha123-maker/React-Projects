import { useEffect, useState } from "react";

export const Challenge = () => {
    const[name,setName] = useState("");
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log(name);
        
    } , [name])

    useEffect(() => {
        document.title = `Count: ${count}`;
    } , [count])

      return(
        <div className="w-full h-full flex justify-center items-center flex-col bg-slate-600 min-h-screen">
            <h1 className="text-8xl font-bold mb-44">Challenge</h1>
            <p className="text-black text-5xl font-bold mb-24">Count: <span>{count}</span></p>
            <button className="text-3xl text-white w-[190px] h-16 border-gray-900 rounded-2xl font-bold bg-red-600 mb-44" onClick={() => {setCount(count+1)}}>Increment</button>
            <p className="text-black text-4xl font-bold mb-24">Name: <span>{name}</span></p>
            <input 
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your name"
              value={name} 
              className="w-[290px] h-[50px] bg-slate-50 focus:hover:outline-blue-900 focus:bg-gray-600 mb-44"
            />
         </div>
      );  
};