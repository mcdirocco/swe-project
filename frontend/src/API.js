// This file serves as an index for all available API calls, broken down into easy to use functions.

// GLOBAL VARIABLES

let USER_TOKEN = undefined;

// Master request, don't touch this one
async function request(url, body) {
    let res = await fetch('http://www.maxdirocco.com/' + url,
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

export async function createUser(firstname, lastname, username, password, email, major, year) {
    return await request('users/create', {
        firstname: firstname,   // type: String
        lastname: lastname,     // type: String
        username: username,     // type: String
        password: password,     // type: String
        email: email,           // type: String
        major: major,           // type: String
        year: year,             // type: String
    });
}

export async function loginUser(username, password) {
    let res = await request('users/login', {
        username: username,
        password: password
    });
    USER_TOKEN = res.token;
    return USER_TOKEN;
}

// --- Event Creation --------------------- // -------------------------------------------------------------------------

export async function createEvent(title, description, date, startTime, endTime, password) {
    return await request('events/create',{
        title: title,               // type: String
        description: description,   // type: String
        date: date,                 // type: Date
        startTime: startTime,       // type: String
        endTime: endTime,           // type: String
        password: password,         // type: String
    });
}

export async function attendEvent(eventID, password) {
    return await request('events/attend', {
        token: USER_TOKEN,          // DEPENDS ON userLogin() BEING CALLED FIRST
        eventID: eventID,           // type: String
        password: password          // type: String
    });
}
