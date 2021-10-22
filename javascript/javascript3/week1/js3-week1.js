//1.my JSON file--------------------------------------------------------------------

[{
    "name": "Aryabhatta",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "499CE" }],
    "also known for:": ["inventor of 0", "Astronomy"],

    "name": "Suśruta",
    "Known as: ": [{ "category": "Physician" }, { "period": "1500BC" }],
    "also known for:": ["Father of Plastic surgery", "Father of brain surgery", "surgical procedures"],

    "name": "Brahmagupta",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "600CE" }],
    "also known for:": ["Astronomer", "Defined the properties of 0"],

    "name": "Baudhayan",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "800BC" }],
    "also known for:": ["Pythagoras theorem earlier than Pythagoras", "Find value of pi"],

    "name": "Mahaviracharya",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "850CE" }],
    "also known for:": ["seperated astrology from mathematics", "other expansions in mathematics"],

    "name": "Charak",
    "Known as: ": [{ "category": "Medicine" }, { "period": "200BC" }],
    "also known for:": ["Ayurveda", "medical treatise entitled Charaka Samhita"],

    "name": "Patanjali",
    "Known as: ": [{ "category": "Yoga" }, { "period": "200BCE" }],
    "also known for:": ["Yoga sutras", "Mahābhāṣya"],

    "name": "Kanad",
    "Known as: ": [{ "category": "Physics" }, { "period": "200BCE" }],
    "also known for:": ["Atomiv theory"]

}]

//2.My cool API-------------------------------------------------------------------

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(typeof(json)); //object
        const jsonString = JSON.stringify(json);
        console.log(typeof(jsonString)); //string
    });


//Giphy searcher------------------------------------------------------------------------------

function searchForGifs() {

    document.getElementById('gifTitle').innerHTML = "Giphy searcher:";

    //get div created in html:
    const divGif = document.getElementById('getGif');

    //create input type text to search:
    const gifInput = document.createElement('input');
    gifInput.setAttribute('type', 'text');
    gifInput.setAttribute('class', 'font');
    gifInput.setAttribute('placeholder', 'Ex: funny cat');
    gifInput.id = "gifInput";
    divGif.appendChild(gifInput);

    const gap1 = document.createElement('p');
    divGif.appendChild(gap1);

    //button to initiate search
    const gifButton = document.createElement('button');
    gifButton.innerHTML = 'Search for gif';
    divGif.appendChild(gifButton);


    const gap2 = document.createElement('p');
    divGif.appendChild(gap2);

    //create and append input type number to specify how many search results should be showed:
    const gifNum = document.createElement('input');
    gifNum.setAttribute('type', 'number');
    gifNum.setAttribute('class', 'font');
    gifNum.setAttribute('placeholder', 'Ex:4');
    divGif.appendChild(gifNum);

    //display the result
    const gifResult = document.getElementById('gifResult');

    //gifpersonalized key 
    const gifKey = 'YZy2UKXShrQ6lnfkDnxnLnDpj6umQeap';

    function getYourGifs() {
        fetch(gifUrl)
            .then(response => response.json())
            .then(gifData => {
                gifData.data.forEach((giphy) => {
                    const image = document.createElement("img");
                    image.setAttribute("src", `${giphy.images.fixed_width.url}`);
                    gifResult.appendChild(image);
                });

            })
    }

    function gifSearch() {
        if (gifInput) {

            gifResult.innerHTML = "";
            gifUrl = ` https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifInput.value}&limit=20&offset=0&rating=g&lang=en`;

            getYourGifs();
        } else {
            const missingInput = document.createElement('p');
            missingInput.innerHTML = "Please provide your search."
            divGif.appendChild(missingInput);
        }
    }


    function gifQty() {
        gifResult.innerHTML = "";
        gifUrl = ` https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifInput.value}&limit=${gifNum.value}&offset=0&rating=g&lang=en`;
        getYourGifs();
    }

    gifButton.addEventListener('click', gifSearch);
    gifNum.addEventListener('input', gifQty);
}

document.getElementById('gif').addEventListener('click', searchForGifs);