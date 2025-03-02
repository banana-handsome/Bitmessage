import fs from "fs";

const control = JSON.parse(fs.readFileSync("key.json", "utf8"));

export const networkUrl = control.networkUrl;
export const networkKey = control.networkKey;
export const messageKey = control.messageKey;