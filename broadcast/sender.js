import e, { json } from "express";
import { DateTime } from "luxon";
import unLock from "./func/unLock.js";
import chalk from "chalk";
import encryptData from "./func/infoEnc.js";
import { networkKey, messageKey, message, port} from "./readFile.js";
import dashboardUi from "./func/dashboard.js";

const app = e()
app.use(e.json())

const userRealKey = networkKey;
const encSecretKey = messageKey;

const information = {
    "time" : DateTime.now().toISO(),
    "messages" : message
}
dashboardUi(messageKey, networkKey, message)

app.post('/send', (req, res) => {
    const { key } = req.body
    if(unLock(key, userRealKey)){
        const encInfo = encryptData(information, encSecretKey);
        res.json({ infomations : encInfo })
        console.log(encInfo)
        console.log(chalk.blue(`=> Message    : data was been read`));
    }else{
        res.send({"system": "invalid key"})
    }
})

app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`)
})