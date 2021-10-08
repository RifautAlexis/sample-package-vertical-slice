export class GetArticleByIdRequest {
    id!: string;

    constructor(request: Partial<GetArticleByIdRequest> = {}){
        Object.assign(this, request);
    };
}