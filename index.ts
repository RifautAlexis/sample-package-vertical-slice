import { ArticleController } from "./controllers/article.controller";
import Koa from "koa";
import "reflect-metadata"
import { useKoaServer } from "routing-controllers";
import "./handlers/index";

const app = new Koa();

useKoaServer(app, {
    classTransformer: true,
    controllers: [ArticleController],
});

app
    .listen(3000, async () => {
        console.log("Koa server is running");
    })
    .on("error", (err: Error) => {
        console.error(err);
    });