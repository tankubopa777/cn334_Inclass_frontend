import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Info() {
  let mySid = "6410742727";
  let myFirstname = "Warunporn";
  let myLastname = "Intarachana";
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between'
    >
      <div style={{ fontSize: "64px" }}
        className="w-full h-screen flex flex-col justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70]"> <div>CN334 Frontend By {mySid} {myFirstname} {myLastname} </div>
      </div> </main>);
}