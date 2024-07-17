import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type NotionProperty = {
  id: string;
  type: string;
  title?: { text: { content: string } }[];
  rich_text?: { text: { content: string } }[];
  date?: { start: string };
  url?: string;
  email?: string;
  phone_number?: string;
  select?: { id: string, name: string, color: string };
  files?: { name: string, url: string }[];
};

type Member = {
  id: string;
  properties: Record<string, NotionProperty>;
};

// Function to fetch members from Notion
export async function getMembers(searchTerm: string = ''): Promise<Member[]> {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID is not defined');
  }

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

    return response.results.map((page: any) => ({
      id: page.id,
      properties: page.properties,
    }));
  } catch (error) {
    console.error('Failed to fetch members:', error);
    throw new Error('Failed to fetch members');
  }
}

// Function to update a member in Notion
export async function updateMember(id: string, properties: Record<string, any>) {
  try {

    console.log("update Member function was run!" + id + properties);

    await notion.pages.update({
      page_id: id,
      properties,
    });
  } catch (error) {
    console.error('Failed to update member:', error);
    throw new Error('Failed to update member');
  }
}
