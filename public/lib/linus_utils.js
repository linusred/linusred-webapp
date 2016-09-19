module.exports = {
    fetchJson: fetchJson
};

function fetchJson(uri) {
    return fetch(new Request(uri)).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject("api request failed to " + uri)
    });
}

