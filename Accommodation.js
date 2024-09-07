// const url = 'https://airbnb19.p.rapidapi.com/api/v1/getLanguages';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '559279eb0dmshe5b17be6a838507p1d0ae0jsn9a330ef17dfd',
// 		'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '559279eb0dmshe5b17be6a838507p1d0ae0jsn9a330ef17dfd',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// async function fetchData() {
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '559279eb0dmshe5b17be6a838507p1d0ae0jsn9a330ef17dfd',
//             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Call the async function to fetch data
// fetchData();

// const url = 'https://booking-com15.p.rapidapi.com/api/v1/meta/getLanguages';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '559279eb0dmshe5b17be6a838507p1d0ae0jsn9a330ef17dfd',
// 		'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// Define an async function to make the API call

// async function fetchData() {
//     const url = 'https://serpapi.com/search.json?engine=google_maps&q=pizza&ll=@40.7455096,-74.0083012,15.1z&type=search';
//     const API_key = '2f2722f9fd416e68bb5f460135c2e7a5edc5f4bd91f336adbfbea4310730f2a7';
//     const options = {
//         method: 'GET',
//         headers: {
//             Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U',
//             'X-RapidAPI-Key': '559279eb0dmshe5b17be6a838507p1d0ae0jsn9a330ef17dfd',
//             'X-RapidAPI-Host': 'hotel-api6.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Call the async function
// fetchData();

const url = 'https://serpapi.com/search.json?engine=google_maps&q=pizza&ll=@40.7455096,-74.0083012,15.1z&type=search';
const API_key = '2f2722f9fd416e68bb5f460135c2e7a5edc5f4bd91f336adbfbea4310730f2a7';

async function fetchData() {
    const options = {
        headers: {
            'x-api-key': API_key
        },
        mode: 'no-cors' // Set request mode to 'no-cors'
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        // Process the fetched data here
    } catch (error) {
        console.error(error);
    }
}

// Call the async function
fetchData();





