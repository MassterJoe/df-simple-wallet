import express from "express";
import {env} from "./env";
import expressConfig from "./config/express";


const {app: appInfo} = env;

const app: express.Application = express();

expressConfig(app)

app.listen(appInfo.port, () => {
    console.log(`${appInfo.displayName}, v${appInfo.version} is started on port ${appInfo.port}`);
});

