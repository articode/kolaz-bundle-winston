import winston from "winston";
import os from "os";
import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

export function WinstonService(params) {
    let transports = [];

    if (params.has("log.console")) {
        let options = Object.assign({
            format: winston.format.prettyPrint(),
            silent: true
        }, params.get('log.console'));

        transports.push(new winston.transports.Console(options));
    }

    if (params.has("log.sumologic")) {
        let options = Object.assign({
            silent: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            headers: {
                "X-Sumo-Host": os.hostname(),
                "X-Sumo-Name": packageJson.name
            }
        }, params.get('log.sumologic'));

        transports.push(new winston.transports.Http(options));
    }

    if (params.has("log.logentries")) {
        let options = Object.assign({
            silent: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            headers: {
                "Content-Type": "application/json"
            }
        }, params.get('log.logentries'));

        transports.push(new winston.transports.Http(options));
    }

    return winston.createLogger({
        transports: transports
    });
}