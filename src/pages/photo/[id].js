import Image from "next/image";
import image_bear from '@/assets/images/bear.jpg'
import image_transport from '@/assets/images/transport.jpg'
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PhotoPage () {
    const params = useParams() ;
    const [photo, setPhoto] = useState()
    const photos = [
        { id: '1', value: image_bear },
        { id: '2', value: image_transport },
    ]

    console.log(params || 'params not found');

    useEffect(() => {
        if (params) {
            console.log({ params });

            const photo = photos.find(p => p.id === params.id) || photos[0]
            setPhoto(photo.value)
        }

    }, [params])

    const search = useSearchParams();
    const searchParams = new URLSearchParams(search.toString())
    const query = searchParams.toString()
    console.log(query || 'query not found');

    return (
        <div>
            this is a picture page
            <Image src={photo} width={50} alt="picture" />
        </div>
    )
}