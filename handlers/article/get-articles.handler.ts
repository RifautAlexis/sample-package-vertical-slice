import { GetArticlesResponse } from "../../contracts/Responses/article/get-articles.response";
import { GetArticlesRequest } from "../../contracts/Requests/article/get-articles.request";
import { verticalSliceContainer, Handler } from "vertical-slice";

export class GetArticlesHandler implements Handler<GetArticlesRequest, GetArticlesResponse> {

    handle(_request: GetArticlesRequest): Promise<GetArticlesResponse> {
        
        const result: GetArticlesResponse = {
            id: '9999999',
            title: 'Title01',
            description: 'Description01',
            authorName: 'authorName01',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}

const getArticlesHandler = new GetArticlesHandler();
verticalSliceContainer.RegisterHandler<GetArticlesRequest, GetArticlesResponse>(new GetArticlesRequest, getArticlesHandler);