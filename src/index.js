import { Bundle } from "kolaz/Component/Bundle";
import { WinstonService } from "./services/WinstonService";

export class WinstonLogger extends Bundle {
    configureContainer(container) {
        container.add("log", WinstonService, ["params"]);
    }
}