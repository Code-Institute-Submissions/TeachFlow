function openPage(pageName, elmnt) {
                // Hide all elements with class="tabcontent" by default */
                var i, countrymap, tfbutton;

                countrymap = document.getElementsByClassName("countrymap");
                for (i = 0; i < countrymap.length; i++) {
                    countrymap[i].style.display = "none";
                }

                // Remove the background color of all tfbutton/buttons
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
            }

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