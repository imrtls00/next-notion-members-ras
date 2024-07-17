import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Function to fetch members from Notion
export async function getMembers(searchTerm: string = '') {
  
    const filter = searchTerm
      ? {
            or: [
                {
                    property: 'Name',
                    title: {
                        contains: searchTerm,
                    }
                },
                {
                    property: 'Email',
                    email: {
                        contains: searchTerm,
                    }
                }
            ]
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

// Update member function
export async function updateMember(memberId: string, name: string): Promise<void> {
    try {
        // Make API call to update member
        await notion.pages.update({
            page_id: memberId,
            properties: {
                // Update the properties of the member
                // For example:
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                }
                // Add more properties as needed
            },
        });

        console.log('Member updated successfully!');
    } catch (error) {
        console.error('Error updating member:', error);
    }
}