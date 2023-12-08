/* this class is used only to test front - server cennection */
export const fetchDocs = () => {
    return fetch("http://localhost:8080/docs")
    .then((response) => response.json())
    .catch((e) => {
        console.error(e);
    });
};

export const postDocs = () => {
    const someBody = {
        title: "Good"
    }

    fetch("http://localhost:8080/docs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(someBody)
    });
};