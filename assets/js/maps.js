function openPage(pageName, elmnt) {
                // Hide all elements with class="countrymap" by default */
                let i, countrymap, tfbutton;

                // define the country map
                countrymap = document.getElementsByClassName("countrymap");
                for (i = 0; i < countrymap.length; i++) {
                    countrymap[i].style.display = "none";
                }

                // Remove the active color on buttons after clicked
                tfbutton = document.getElementsByClassName("tfbutton");
                for (i = 0; i < tfbutton.length; i++) {
                    tfbutton[i].style.backgroundColor = "";
                }

                // Show the specific tab content
                document.getElementById(pageName).style.display = "block";

                // Add the specific color to the button used to open the tab content
                elmnt.style.backgroundColor = "#ffffff";
                setTimeout(function(){
                    mapJapan.invalidateSize();
                    mapChina.invalidateSize();
                    mapThailand.invalidateSize();
                }, 0);
            } // end of function

            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();

            //Create maps 

            //sk

            var LatSouthKorea = 35.9078;
            var LngSouthKorea = 127.7669;
            var ZoomSouthKorea = 6;

            var mapSouthKorea = L.map('mapSouthKorea', {
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
            var LatJapan = 36.20;
            var LngJapan = 138.25;
            var ZoomJapan = 5;

            var mapJapan = L.map('mapJapan', {
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
            var LatChina = 35.8617;
            var LngChina = 104.1954;
            var ZoomChina = 3;

            var mapChina = L.map('mapChina', {
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
            var LatThailand = 11.973342;
            var LngThailand = 99.723545;
            var ZoomThailand = 4;

            var mapThailand = L.map('mapThailand', {
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
            `<h5>Info:</h5>
             <p>South Korea is an extraordinary country filled with beautiful beaches, thriving cities, ancient temples, remarkable natural scenery and most importantly, friendly people with ancient history. </p>
             <span>Capital City:</span> Seoul
             <br> <br>
             <span>Average Salary:</span> $1,600 to $2,675
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & E-2 visa
             <br> <br>
             <span>Benefits:</span> Paid airfare, housing & end of contract bonus`;

            // Japan info
            document.getElementById("infoJapan").innerHTML = 
            `<h5>Info:</h5>
             <p>Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! </p>
             <span>Capital City:</span> Tokyo
             <br> <br>
             <span>Average Salary:</span> $1,700 to $3,000
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & completed visa form
             <br> <br>
             <span>Benefits:</span> Paid airfare, housing/housing allowance`;

            // china info
            document.getElementById("infoChina").innerHTML = 
            `<h5>Info:</h5>
             <p>China is the largest of all Asian countries and has the largest population of any country in the world. Occupying nearly the entire East Asian landmass, it covers approximately one-fourteenth of the land area of Earth.</p>
             <span>Capital City:</span> Beijing
             <br> <br>
             <span>Average Salary:</span> $1,700 - $4,300
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & Z visa
             <br> <br>
             <span>Benefits:</span> Low cost of Living`;

            // Thailand info
            document.getElementById("infoThailand").innerHTML = 
            `<h5>Info:</h5>
             <p>China is the largest of all Asian countries and has the largest population of any country in the world. Occupying nearly the entire East Asian landmass, it covers approximately one-fourteenth of the land area of Earth.</p>
             <span>Capital City:</span> Bangkok
             <br> <br>
             <span>Average Salary:</span> $800-$1,000 
             <br> <br>
             <span>Requirements:</span> Bachelor's degree & B visa
             <br> <br>
             <span>Benefits:</span> Low cost of Living`;