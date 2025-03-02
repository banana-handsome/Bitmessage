import CryptoJS from "crypto-js";

export default function encryptData(data, secretKey) {
    // 🔹 Buat IV (Initialization Vector) secara acak
    const iv = CryptoJS.lib.WordArray.random(16);

    // 🔹 Derivasi kunci dengan PBKDF2
    const key = CryptoJS.PBKDF2(secretKey, iv, {
        keySize: 256 / 32, // 256-bit key
        iterations: 10000, // Iterasi tinggi untuk keamanan lebih baik
    });

    // 🔹 Enkripsi data menggunakan AES dengan IV
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
        iv: iv,
        mode: CryptoJS.mode.CBC, // Cipher Block Chaining mode (lebih aman)
        padding: CryptoJS.pad.Pkcs7, // Padding standar
    });

    // 🔹 Gabungkan IV dan Enkripsi, lalu encode dengan Base64
    return CryptoJS.enc.Base64.stringify(iv.concat(encrypted.ciphertext));
}
