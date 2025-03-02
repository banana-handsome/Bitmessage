import CryptoJS from "crypto-js";

export default function decryptData(encryptedData, secretKey) {
    try {
        // 🔹 Decode dari Base64 ke WordArray
        const rawData = CryptoJS.enc.Base64.parse(encryptedData);

        // 🔹 Ambil IV dari 16 byte pertama
        const iv = CryptoJS.lib.WordArray.create(rawData.words.slice(0, 4), 16);

        // 🔹 Ambil ciphertext dari sisanya
        const ciphertext = CryptoJS.lib.WordArray.create(rawData.words.slice(4));

        // 🔹 Derivasi kunci PBKDF2
        const key = CryptoJS.PBKDF2(secretKey, iv, {
            keySize: 256 / 32,
            iterations: 10000,
        });

        // 🔹 Dekripsi AES dengan IV
        const bytes = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        // 🔹 Konversi kembali ke JSON
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        console.error("❌ Error saat dekripsi:", error);
        return null;
    }
}
