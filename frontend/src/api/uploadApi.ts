export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    try{
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });
        if (response.ok){
            alert("File uploaded successfully");
            return response.json();
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file");
    }
}