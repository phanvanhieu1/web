function search() {
    var search = document.getElementById("search").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("search-results").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "search.php?search=" + search, true);
    xhttp.send();
}
