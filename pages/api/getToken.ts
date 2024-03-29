import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch data from the Node.js backend (replace with your actual endpoint)
        const response = await fetch('http://localhost:5000/auth/getToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: req.body.code }),
        });
        const data = await response.json();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching getToken:', error);
        res.status(500).json({ error: 'Internal Server getToken' });
    }
}