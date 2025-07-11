import 'dotenv/config';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "api-rest-node-js-data-6e7af",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "275472614791",
    appId: process.env.FIREBASE_APP_ID
    };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Firestore
const db = getFirestore(app);

// Exportar la instancia de Firestore
export { db };