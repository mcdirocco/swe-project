// This file serves as an index for all available API calls, broken down into easy to use functions.

// Master request, don't touch this one
async function request(url, body) {
    let res = await fetch('http://localhost:3001/' + url,
        {
            credentials: 'omit',
            headers: {
                accept: 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json;charset=UTF-8',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
            },
            referrerPolicy: 'no-referrer-when-downgrade',
            body: JSON.stringify(body),
            method: 'POST',
            mode: 'cors',
        },
    );
    res = await res.json();
    return res;
}

// --- User Creation and Authentication --- // -------------------------------------------------------------------------

export async function createUser(/* TODO */) {
    return await request('users/create', {/* TODO */});
}

// --- Event Creation --------------------- // -------------------------------------------------------------------------

export async function createEvent(title, description, date, startTime, endTime) {
    return await request('events/create',{
        title: title,
        description: description,
        date: date,
        startTime: startTime,
        endTime: endTime,
    });
}
