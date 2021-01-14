//------------------ Display the map and info contents ------------ //

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* inspiration CREDIT https://www.w3schools.com/howto/howto_js_full_page_tabs.asp*/
function openPage(pageName, elmnt) {
    // once page loads, hide all elements with class="countrymap" */
    let i; 
    let countrymap;
    let tfbutton; 

    // define the country map, set all to display none (no map or contents)
    countrymap = document.getElementsByClassName("countrymap"); // returns a collection of all elements in the document with the specified class name
    for (i = 0; i < countrymap.length; i++) {  // countrymap.length == 4
        countrymap[i].style.display = "none"; 
    }

    // Remove the active color class on buttons after clicked
    tfbutton = document.getElementsByClassName("tfbutton");
    for (i = 0; i < tfbutton.length; i++) {
        tfbutton[i].style.backgroundColor = ""; 
    }

    // Set the content to display block, page name given as arg to func
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the 'this' active button 
    elmnt.style.backgroundColor = "#034cae";
    setTimeout(function(){
    mapJapan.invalidateSize(); //Checks if the map container size changed and updates the map if so
    mapChina.invalidateSize();
    mapThailand.invalidateSize();
    }, 0);
} 

//------------------------------------ Create maps 
//sk
let LatSouthKorea = 35.9078;
let LngSouthKorea = 127.7669;
let ZoomSouthKorea = 6;

let mapSouthKorea = L.map('mapSouthKorea', {
    center: [LatSouthKorea, LngSouthKorea],
    zoom: ZoomSouthKorea
});

//set one map tiles source
googleStreetsSouthKorea = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
    // add markers
}).addTo(mapSouthKorea);
            
// add some markers
let seoul = L.marker([37.9078, 126.9780]).addTo(mapSouthKorea).bindPopup("Seoul");;
let busan = L.marker([35.1796, 129.0756]).addTo(mapSouthKorea).bindPopup("Busan");;
let incheon = L.marker([37.4563, 126.7052]).addTo(mapSouthKorea).bindPopup("Incheon");;

// Japan
let LatJapan = 36.20;
let LngJapan = 138.25;
let ZoomJapan = 5;

let mapJapan = L.map('mapJapan', {
    center: [LatJapan, LngJapan],
    zoom: ZoomJapan
});

//set one map tiles source
googleStreetsJapan = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mapJapan);

let osaka = L.marker([34.6937, 135.5023]).addTo(mapJapan).bindPopup("Osaka");
let tokyo = L.marker([35.6762, 139.6503]).addTo(mapJapan).bindPopup("Tokyo");;
let sapporo = L.marker([43.0618, 141.3545]).addTo(mapJapan).bindPopup("Sapporo");;

// China
let LatChina = 35.8617;
let LngChina = 104.1954;
let ZoomChina = 3;

let mapChina = L.map('mapChina', {
    center: [LatChina, LngChina],
    zoom: ZoomChina
});

//set one map tiles source
googleStreetsChina = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mapChina);

let beijing = L.marker([39.9042, 116.4074]).addTo(mapChina).bindPopup("Beijing");
let guangzhou = L.marker([23.1291, 113.2644]).addTo(mapChina).bindPopup("Guangzhou");
let shenzhen = L.marker([22.5431, 114.0579]).addTo(mapChina).bindPopup("Shenzhen");

// Thailand
let LatThailand = 11.973342;
let LngThailand = 99.723545;
let ZoomThailand = 4;

let mapThailand = L.map('mapThailand', {
    center: [LatThailand, LngThailand],
    zoom: ZoomThailand
});

//set one map tiles source
googleStreetsThailand = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mapThailand);

let chiangmai = L.marker([18.7883, 98.9853]).addTo(mapThailand).bindPopup("Chiang mai");
let bangkok = L.marker([13.7563, 100.5018]).addTo(mapThailand).bindPopup("Bangkok");
let phuket = L.marker([7.8804, 98.3923]).addTo(mapThailand).bindPopup("Phuket");

            
        