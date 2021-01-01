/* inspiration taken from https://www.w3schools.com/howto/howto_js_full_page_tabs.asp*/
function openPage(pageName, elmnt) {
                // once page loads, hide all elements with class="countrymap" */
                let i; 
                let countrymap;
                let tfbutton; 

                // define the country map
                countrymap = document.getElementsByClassName("countrymap");
                for (i = 0; i < countrymap.length; i++) {
                    countrymap[i].style.display = "none"; 
                }

                // Remove the active color class on buttons after clicked
                tfbutton = document.getElementsByClassName("tfbutton");
                for (i = 0; i < tfbutton.length; i++) {
                    tfbutton[i].style.backgroundColor = ""; 
                }

                // Set the content to block, page name given as arg to func
                document.getElementById(pageName).style.display = "block";

                // Add the specific color to the active button 
                elmnt.style.backgroundColor = "#034cae";
                setTimeout(function(){
                    mapJapan.invalidateSize(); //Checks if the map container size changed and updates the map if so
                    mapChina.invalidateSize();
                    mapThailand.invalidateSize();
                }, 0);
            } 

            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();


            //Create maps 

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
            });
            googleStreetsSouthKorea.addTo(mapSouthKorea);


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
            });
            googleStreetsJapan.addTo(mapJapan);


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
            });
            googleStreetsChina.addTo(mapChina);

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
            });
            googleStreetsThailand.addTo(mapThailand);

            // set info

            // sk info

            document.getElementById("infoSouthKorea").innerHTML = 
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

            // Japan info
            document.getElementById("infoJapan").innerHTML = 
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

            // china info
            document.getElementById("infoChina").innerHTML = 
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