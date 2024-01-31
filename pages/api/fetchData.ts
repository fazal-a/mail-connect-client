import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch data from the Node.js backend (replace with your actual endpoint)
        const response = await fetch('http://localhost:5000/');
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching welcome data:', error);
        res.status(500).json({ error: 'Error fetching welcome data' });
    }
}
