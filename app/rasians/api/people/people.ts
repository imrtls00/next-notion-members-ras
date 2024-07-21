// Import necessary modules and configuration
import { useEffect, useState } from 'react';

// Define the function to search for directory people
async function searchDirectoryPeople(query: string): Promise<void> {
    // Get API key from config
    const apiKey = process.env.GOOGLE_API_KEY;
    // Get access token from local storage
    const accessToken = localStorage.getItem("access_token");
    // Define the API endpoint
    const endpoint = `https://people.googleapis.com/v1/people:searchDirectoryPeople`;

    // Set up query parameters
    const params = new URLSearchParams({
        pageSize: '10',
        query,
        readMask: 'emailAddresses,coverPhotos,names,photos,urls,phoneNumbers,genders',
        sources: 'DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE',
        key: apiKey
    });

    // Construct the URL with parameters
    const url = `${endpoint}?${params.toString()}`;

    try {
        // Make the fetch request
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        });

        // Check if response is okay
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the response JSON
        const data = await response.json();
        // Update the result content in the DOM
        document.getElementById('result')!.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        document.getElementById('result')!.textContent = `Error: ${error.message}`;
    }
}

// Function to generate a cryptographically random state
function generateCryptoRandomState(): string {
    return btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
}

// Function to initiate OAuth2 sign-in
function oauth2SignIn(): void {
    const state = generateCryptoRandomState();
    localStorage.setItem('state', state);

    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    const params = {
        'client_id': process.env.GOOGLE_CLIENT_ID,
        'redirect_uri': process.env.REDIRECT_URI,
        'scope': 'https://www.googleapis.com/auth/directory.readonly',
        'state': state,
        'include_granted_scopes': 'true',
        'response_type': 'token'
    };

    const url = `${oauth2Endpoint}?${new URLSearchParams(params).toString()}`;

    // Redirect to the OAuth2 sign-in page
    window.location.href = url;
}

// Function to extract query parameters from the URL hash
function getQueryParams(): Record<string, string> {
    const params: Record<string, string> = {};
    const queryString = window.location.hash.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Function to handle the OAuth2 response
function handleOAuthResponse(): void {
    const params = getQueryParams();
    if (params['access_token']) {
        const accessToken = params['access_token'];
        const state = params['state'];

        if (state !== localStorage.getItem('state')) {
            console.error('State validation failed');
            return;
        }

        // Store the access token in local storage
        localStorage.setItem('access_token', accessToken);

        console.log('Access Token:', accessToken);
    }
}

// React component to handle the OAuth2 flow and search functionality
const OAuthComponent: React.FC = () => {
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        if (window.location.hash) {
            handleOAuthResponse();
        }
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        searchDirectoryPeople(query);
    };

    return 0; // what to return?
};

export default OAuthComponent;
