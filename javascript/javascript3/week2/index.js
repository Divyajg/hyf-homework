//1.movies excercise:-------------------------------------------------------------
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then(movies => {
        console.log(movies);

        let badMoviesSince2k = [];
        let badMovies = [];
        movies.filter((movie) => {
            if (movie.rating <= 4) {
                badMovies.push(movie);
            }
        });

        badMovies.filter((movie) => {
            if (movie.year >= 2000) {
                badMoviesSince2k.push(movie);
            }
        });
        console.log(badMovies);
        console.log(badMoviesSince2k);
    });



//2. that resolves after set time:------------------------------------------
//Promise:
const resolveAfterSetTime = (resolveAfter) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(resolveAfter) != "number")
                return reject("Error")
            resolve("I am called asynchronously after " + resolveAfter + " seconds");
        }, resolveAfter * 1000);
    })
};
resolveAfterSetTime(3).then((text) => { console.log(text) }).catch((e) => { console.log(e) });

//async/await:

const resolve = async() => {
    const result = await resolveAfterSetTime(4);
    return result;
}
resolve().then((text) => console.log(text)).catch((e) => console.log(e));

//3.Rewrite time:------------------------------------------------------------------

const setTimeoutPromise = (timeSet) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Its promise timeout, Called after 3 seconds');
        }, timeSet * 1000);
    })
}
setTimeoutPromise(3).then((data) => { console.log(data) })


const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const success = (pos) => { resolve(pos.coords) };

        function error(err) { reject(console.warn(`ERROR(${err.code}): ${err.message}`)) };
        navigator.geolocation.getCurrentPosition(success, error, options);
    })
}
getCurrentLocation()
    .then((position) => { console.log(position) }).catch((error) => { console.log(error) });

//4.Fetching nad waiting:---------------------------------------------------------------
//using promise:
const fetchWithPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json').then((response) => { return response.json() });
            resolve(result);
            console.log("Logged after 3 seconds: promise.")
        }, 3000);
    })
}

fetchWithPromise().then((data) => console.log(data));

//using async/await:
//fetch with url:
const fetchWithAsync = async() => {
    const movieData = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json').then((response) => { return response.json() });
    console.log("logged: async.");
    return movieData;
};
fetchWithAsync().then((result) => { console.log(result); });

//fetch promise function:
const fetchAsyncWithCallbackFunction = async() => {
    const movieData = await fetchWithPromise();
    console.log("Logged after 3 seconds: async");
    return movieData;
};
fetchAsyncWithCallbackFunction().then((result) => { console.log(result); });