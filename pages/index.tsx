import React, {useEffect, useState} from "react";
import Link from "next/link";
const indexPage = () => {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/fetchData'); // Automatically mapped by Next.js
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            <Link href='/login' >Login</Link>
            <Link href='/email'>Email</Link>
        </>
    )
};

export default indexPage;
