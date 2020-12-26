function openPage(pageName, element) {
    // first hide all the elements with class = "tabcontent"
    let i, tabcontent, tfbutton;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // take away the bk color

    tfbutton = document.getElementsByClassName("tfbutton");
    for (i=0; i < tfbutton.length; i++) {
        tfbutton[i].style.backgroundColor = "";
    }

    // show the tabs content
    document.getElementsById(pagename).style.display = "block";

    // add the color to button ussed to open tab content
    element.style.backgroundColor = "#fffffff";
    setTimeout(function(){
        mapjapan.invalidateSize();
        mapchina.invalidateSize();
        mapthailand.invalidateSize();
    }, 0);
}
    // korea
    // get element with id = "defaultOpen" and click on it
    document.getElementsById("defaultOpen").click();

    // create maps
    let latsk = 35.9078;
    let langsk = 127.7669;
    let zoomsk= 4;

    let mapsk = L.map("mapsk", {
        center: [latsk, langsk],
        zoom: zoomsk
    });

    // set one map tiles source
    googlestreetssk = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']
            });
             googlestreetssk.addTo(mapsk);

    // japan
    let latjapan = 36.2048;
    let langjapan = 138.2529;
    let zoomjapan = 3;

    let mapjapan = L.map("mapjapan", {
        center: [latjapan, langjapan],
        zoom: zoomjapan
    });

    //set one map tiles source
    googlestreetsjapan = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']
            });
            googlestreetsjapan.addTo(mapjapan);

    // china
    let latchina = 35.8617;
    let langchina = 104.1954;
    let zoomchina = 1;

    let mapchina = L.map("mapchina", {
        center: [latchina, langchina],
        zoom: zoomchina
    });

    googlestreetschina = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']
            });
            googlestreetschina.addTo(mapchina);

    // thailand
    let latthai = 15.8700;
    let langthai = 100.9925;
    let zoomthai = 2;

    let mapthailand = L.map("mapthailand", {
        center: [latthai, langthai],
        zoom: zoomthai
    });

        googlestreetsthai = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                attribution: '<a href="https://www.google.com/maps">Google Maps</a>',
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']
            });
            googlestreetsthai.addTo(mapthailand);