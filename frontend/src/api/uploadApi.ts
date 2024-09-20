export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    try{
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });
        if (response.ok){
            console.log(response)
            console.log(typeof response)
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")){
                alert("File uploaded successfully");
                return response.json();
            }
            else {
                // If the response is not JSON, handle it accordingly (e.g., text or status message)
                const textResponse = await response.text();
                alert("File uploaded successfully (Non-JSON response)");
                console.log("Response:", textResponse);
                return textResponse;
            }
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file");
    }
}