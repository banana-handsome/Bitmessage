import CryptoJS from "crypto-js";
import decryptData from "./func/decryptData.js";
import { networkKey, messageKey, networkUrl } from "./readFile.js";
import chalk from "chalk";


async function fetchInformation() {
    try {
        const url = networkUrl
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: networkKey }),
        });

        const datas = await res.json();
        console.log("Received Data:", {datas});

        if (datas.infomations) {
            // 🔹 Dekripsi informasi
            const decryptedData = decryptData(datas.infomations, messageKey);

            if (decryptedData) {
                console.log("Decrypted Data:", decryptedData)
                return decryptedData;
            } else {
                console.log(chalk.red('Invalid Key or Decryption Failed!'));
                return null;
            }
        } else {
            console.log("Invalid Response!");
            return null;
        }
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

fetchInformation();
