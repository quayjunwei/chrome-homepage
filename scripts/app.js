document.addEventListener("DOMContentLoaded", function () {
    function search() {
        let query = document.getElementById("search").value;
        if (query.replace(/\s/g, '').length) {
            if (!is_valid_url(query)) {
                query = "https://www.google.com/search?q=" + query;
            }
            window.location.href = query;
        }
    }

    function is_valid_url(_string) {
        const match_pattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
        return match_pattern.test(_string);
    }

    document.getElementById("search").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            search();
        }
    });
});