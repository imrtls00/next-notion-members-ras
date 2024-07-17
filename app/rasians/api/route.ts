import { NextResponse } from 'next/server';
import { getMembers, updateMember } from '../services/notion';

// API route to fetch members with optional search term
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('search') || '';

  try {
    
    const members = await getMembers(searchTerm);
    return NextResponse.json(members);

  } catch (error) {
    console.error('Failed to fetch members:', error);
    return NextResponse.error();
  }
}

// API route to update a member
export async function PATCH(request: Request) {
  const { id, name } = await request.json();
  console.log('Updating member [from PATCH API]:', id, name);

  try {
    await updateMember(id, name);
    return NextResponse.json({ message: 'Member updated successfully' });
  } catch (error) {
    console.error('Failed to update member:', error);
    return NextResponse.error();
  }
}
