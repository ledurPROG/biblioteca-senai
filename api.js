const BASE_URL = "http://localhost:5015/api/Biblioteca;"

export const getRequest = async () => {
    try {
        const response = await fetch(BASE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`GET request failed with status: ${response.status}`);
        }

        const textData = await response.text();
        const data = JSON.parse(textData);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error during GET request:", error);
        throw error;
    }
};

export const postRequest = async (titulo, autor,) => {
    try {
        let myBody = {
            id: 0,
            idVenda: 0,
            idDevolucao: 0,
            titulo: titulo,
            autor: autor,
            locado: false && true,

        };

        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myBody),
        });

        if (!response.ok) {
            throw new Error(`POST request failed with status: ${response.status}`);
        }

        const textData = await response.text();
        return JSON.parse(textData);
    } catch (error) {
        console.error("Error during POST request:", error);
        throw error;
    }
};

export const deleteRequest = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "text/plain",
            },
        });

        if (!response.ok) {
            throw new Error(`DELETE request failed with status: ${response.status}`);
        }

        console.log(response);
    } catch (error) {
        console.error("Error during GET request:", error);
        throw error;
    }
};
