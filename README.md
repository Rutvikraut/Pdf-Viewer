# PDF-Viewer
## Overview
This project is a web application for uploading and viewing PDF files. Users can upload PDF files, which are validated for size and type, and the files are stored on the server. A PDF viewer is also included for users to view uploaded documents.

## Features
1) File upload with validation for PDF type and size (limit of 4 MB).
2) PDF viewing functionality.
3) PDF file storage on the server.
4) Real-time feedback for file upload status.

## Technologies Used
Frontend : ReactJs, Tailwind CSS, TypeScript
Backend : Node.js, Express, TypeScript

## SetUp Instructions
### Pre-requisites
- Node.js
- NPM
- Firebase Setup

### Cloning Repository

``` 
git clone https://github.com/Rutvikraut/Pdf-Viewer.git
cd Pdf-Viewer
```

### Installing npm Package
```
npm install
```

### Configuring Firebase Service Account
#### Add ```firebaseServiceAccountKey.json``` to ```backend\src\``` folder

- In the Firebase console, open ``Settings > Service Accounts``.

- Click ``Generate New Private Key``, then confirm by clicking Generate Key.

- Securely store the JSON file containing the key.
### Running The Project
#### Frontend
```
npm run dev
```

#### Backend
```
npm run dev
```
**Happy Coding ! :)**
