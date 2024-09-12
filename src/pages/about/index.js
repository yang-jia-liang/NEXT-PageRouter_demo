import {useRouter, useSearchParams} from 'next/navigation'
import style from './index.module.scss'

export default function About() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())

    console.log(params);

    return (
   <div className={style.about}>
       About <br/>
       {params.toString()} <br/>
       <button onClick={() => router.push('/login')}>login</button>
   </div>
  );
}
