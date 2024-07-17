import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Function to fetch members from Notion
export async function getMembers(searchTerm: string = '') {
  
    const filter = searchTerm
      ? {
            property: 'Name',
            title: {
                contains: searchTerm,
            },
        }
      : undefined;
  
    try {

        const response = await notion.databases.query({
            database_id: databaseId,
            filter,
        });
  
        return response.results;

    } catch (error) {
        console.error('Failed to fetch members:', error);
        throw new Error('Failed to fetch members');
    }
}