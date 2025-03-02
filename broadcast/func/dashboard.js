import chalk from "chalk";
import ora from "ora";
import figlet from "figlet";

export default function dashboardUi(messageKey, networkKey, message){
    figlet("BROADCASTING", (err, data) => {
        if (err) console.log("Error");
        else console.log(chalk.green(data));
        const spinner = ora("Loading data...").start();
        setTimeout(() => {
            spinner.succeed("Datas Has been Spread!");
        }, 3000);
        setTimeout(() => {
            console.log(chalk.blue(`Network Key  : ${networkKey}`));
            console.log(chalk.blue(`Message Key  : ${messageKey}`));
            console.log(chalk.blue(`Message      : ${message}`));
        }, 4000) 
    });
    
}