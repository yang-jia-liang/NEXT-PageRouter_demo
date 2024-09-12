
import Link from "next/link";
import variables from "@/styles/variables.module.scss"


export default function Index() {
  return (
   <div style={{ color: variables.primaryColor }}>
       login <br/>
       <Link href="/about">about</Link>
   </div>
  );
}
