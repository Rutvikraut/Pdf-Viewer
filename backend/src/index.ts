import express, { Request, Response } from 'express';
import admin from 'firebase-admin';
import multer from 'multer';
import cors from "cors";
import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccount = JSON.parse(
    await readFile(path.resolve(__dirname, 'firebaseServiceAccountKey.json'), 'utf-8')
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'pdf-viewer-d8210.appspot.com'
});

const bucket = admin.storage().bucket();


const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 4 * 1024 * 1024 }
});

app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const file = req.file;
    const filename = file.originalname;

    try {

        // const compressedbuffer=await compress(file.buffer)
        const fileUpload = bucket.file(filename);

        await fileUpload.save(file.buffer, {
            metadata: {
                contentType: file.mimetype,
                cacheControl: 'public, max-age=31536000'
            }
        });

        res.status(200).send(`File ${filename} uploaded successfully.`);
        console.log(res)
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file.');
    }
});

app.get('/file-url/:filename', async (req: Request, res: Response) => {
    const { filename } = req.params;

    try {
        const file = bucket.file(filename);
        const [exists] = await file.exists();

        if (!exists) {
            return res.status(404).send('File not found');
        }

        const [url] = await file.getSignedUrl({
            action: 'read',
            expires: '03-01-2500'
        });

        res.json({ url });
    } catch (error) {
        res.status(500).send('Failed to get file URL');
    }
});

app.get('/list-files', async (req: Request, res: Response) => {
    try {
        const [files] = await bucket.getFiles();
        const fileNames = files.map(file => file.name);

        res.json({ files: fileNames });
    } catch (error) {
        console.error('Error listing files:', error);
        res.status(500).send('Error listing files.');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
