import { NextResponse } from 'next/server';
import {  } from './people';

// API route to fetch members with optional search term
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('search') || '';

  try {
    
    // implement the logic to fetch picture + name from ./people.ts

    console.log('Fetching members with search term:', searchTerm);
    return NextResponse.json(searchTerm);

  } catch (error) {
    console.error('Failed to fetch members:', error);
    return NextResponse.error();
  }
}