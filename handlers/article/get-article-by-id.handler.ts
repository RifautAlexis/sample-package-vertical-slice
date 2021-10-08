import { GetArticleByIdRequest } from "../../contracts/Requests/article/get-article-by-id.request";
import { GetArticleByIdResponse } from "../../contracts/Responses/article/get-article-by-id.response";
import { verticalSliceContainer, Handler } from "vertical-slice";

export class GetArticleByIdHandler implements Handler<GetArticleByIdRequest, GetArticleByIdResponse> {

    handle(request: GetArticleByIdRequest): Promise<GetArticleByIdResponse> {
        
        const result: GetArticleByIdResponse = {
            id: request.id,
            title: 'Title01',
            description: 'Description01',
            authorName: 'authorName01',
            createdAt: new Date(),
            updatedAt: new Date(),
            content: "I'm a content and really happy cause why I could not ?"
        }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const getArticleByIdHandler = new GetArticleByIdHandler();
verticalSliceContainer.RegisterHandler<GetArticleByIdRequest, GetArticleByIdResponse>(new GetArticleByIdRequest, getArticleByIdHandler);