import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch data from the Node.js backend (replace with your actual endpoint)
        const response = await fetch('http://localhost:5000/threads/getThreadsList', {
            method: 'GET'
        });
        const data = await response.json();
        res.status(200).send(data);
    } catch (error) {
        console.log('Error fetching Threads List:', error);
        res.status(500).json({ error: 'Internal Server Threads List' + error });
    }
}