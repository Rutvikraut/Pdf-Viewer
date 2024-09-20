export async function getPdfList() {
    try {
        const response = await fetch("http://localhost:3000/list-files", {
            method: "GET",
        });
        if (response.ok) {
            const data = await response.json();
            console.log("PDF list fetched successfully:", data.files);
            return data.files;
        } else {
            throw new Error("Failed to fetch PDF list");
        }
    } catch (error) {
        console.error("Error fetching PDF list:", error);
        throw error;
    }
}