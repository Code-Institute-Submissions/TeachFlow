//------------------ function to display the map and info contents ------------ //
/* inspiration taken from https://www.w3schools.com/howto/howto_js_full_page_tabs.asp*/
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

            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();


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

            // japan
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

            // china
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

            
            // set info

            // sk info

           /* document.getElementById("infoSouthKorea").innerHTML = 
            `<h4 class = "heading">Information:</h4>
             <p>South Korea is filled with beautiful beaches, thriving cities, ancient temples, remarkable natural scenery and most importantly, friendly people with ancient history. </p>
             <br>
             <span>Capital City:</span> Seoul
             <br> <br>
             <span>Average Salary:</span> $1,600 to $2,675
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & E-2 visa
             <br> <br>
             <span>Benefits:</span> Paid airfare, housing & end of contract bonus`;
            */ 

            // Japan info
           /* document.getElementById("infoJapan").innerHTML = 
            `<h4 class = "heading">Information:</h4>
             <p>Japan is a string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! </p>
             <br>
             <span>Capital City:</span> Tokyo
             <br> <br>
             <span>Average Salary:</span> $1,700 to $3,000
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & completed visa form
             <br> <br>
             <span>Benefits:</span> Paid airfare, housing/housing allowance`;
*/
            // china info
           /* document.getElementById("infoChina").innerHTML = 
            `<h4 class = "heading">Information:</h4>
             <p>China is the largest of all Asian countries and has the largest population of any country in the world. Occupying nearly the entire East Asian landmass, it covers approximately one-fourteenth of the land area of Earth.</p>
             <br>
             <span>Capital City:</span> Beijing
             <br> <br>
             <span>Average Salary:</span> $1,700 to $4,300
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & Z visa
             <br> <br>
             <span>Benefits:</span> Low cost of Living`;
*/
/*
            // Thailand info
            document.getElementById("infoThailand").innerHTML = 
            `<h4 class = "heading">Information:</h4>
             <p>Thailand islocated in the center of mainland Southeast Asia. It is wholly within the tropics and encompasses diverse ecosystems.</p>
             <br>
             <span>Capital City:</span> Bangkok
             <br> <br>
             <span>Average Salary:</span> $800 to $1,000 
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & B visa
             <br> <br>
             <span>Benefits:</span> Low cost of Living`;
             */