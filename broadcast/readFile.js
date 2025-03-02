import fs from "fs";

const control = JSON.parse(fs.readFileSync("defineKey.json", "utf8"));

export const port       = control.port;
export const message    = control.message;
export const networkKey = control.networkKey;
export const messageKey = control.messageKey;