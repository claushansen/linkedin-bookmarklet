var counter = 0;
var totalresults;
var results;
var opener;
var confirmload = confirm("starting to load people to checkout");
var confirmprocess;
if(confirmload == true){
var loading = setInterval(function () {loadmore();}, 3000);
}
function loadmore(){
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
clearInterval(loading);
confirmprocess = confirm("All people are now loaded and the process can start");
if(confirmprocess == true){
process();
}
    }
window.scrollTo(0,document.body.scrollHeight);
}

function process(){
result = document.evaluate("//div[@class='card-wrapper']/div/a[@class='image']",
document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)

;
totalresults = result.snapshotLength;
opener = setInterval(function () {openwin();}, 3000);

}

function openwin() { // It is a popup, so obviously you need to call this from a user triggered event and not page load
if(counter > result.snapshotLength){
clearInterval(opener);
}
var page = result.snapshotItem(counter).href;
    var pop = window.open(page);
counter ++;
    var close = function() {
        pop.close();
    };
    setTimeout(close, 5000);
}
