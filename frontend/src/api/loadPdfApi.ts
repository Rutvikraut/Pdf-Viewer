export async function loadPdfFile(filename:string){
    try{
        const response = await fetch(`http://localhost:3000/file-url/${filename}`, {
            method: "GET",
        });
        if (response.ok) {
            const data = await response.json();
            // console.log("PDF list fetched successfully:", data.url);
            return data.url;
        } else {
            throw new Error("Failed to fetch PDF list");
        }
    }catch (error) {
        console.error("Error fetching PDF:", error);
        throw error;
    }
}