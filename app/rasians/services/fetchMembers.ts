import axios from 'axios';
import simplifyData from './simplifyData';

async function fetchMembers(searchTerm: string): Promise<any> {
    const url = `rasians/api?search=${searchTerm}`;

    try {
        const response = await axios.get(url);
        const simplifiedResponse = simplifyData(response.data);

        return simplifiedResponse;
    } catch (error) {
        // Handle error here
        console.error('Error fetching members:', error);
        throw error;
    }
}

export default fetchMembers;