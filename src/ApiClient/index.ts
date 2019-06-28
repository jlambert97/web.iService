export function POST(url: string, data: Object, token: string) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => JSON.stringify(res))
        .catch(error => console.log('Error: ', error))
}