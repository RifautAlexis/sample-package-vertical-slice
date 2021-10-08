import { PutArticleRequest } from "../../contracts/Requests/article/put-article.request";
import { PutArticleResponse } from "../../contracts/Responses/article/put-article.response";
import { verticalSliceContainer, Handler } from "vertical-slice";

export class PutArticleHandler implements Handler<PutArticleRequest, PutArticleResponse> {

    handle(_request: PutArticleRequest): Promise<PutArticleResponse> {
        
        const result: PutArticleResponse = {}
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}

const putArticleHandler = new PutArticleHandler();
verticalSliceContainer.RegisterHandler<PutArticleRequest, PutArticleResponse>(new PutArticleRequest, putArticleHandler);