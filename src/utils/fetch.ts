const fetchAPI = async (url: string, options: RequestInit) => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    if (!response.ok) {
        console.error('API Error:', response.status, response.statusText);
        return null;
    }

    const data = await response.json();
    // console.log('API Response:', data.data);
    return data;
};

export default fetchAPI;