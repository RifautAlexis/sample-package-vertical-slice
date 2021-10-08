export class PutArticleRequest {
    id!: string;
    otherParam!: string;
    anotherParamFromBody!: string;

    constructor(request: Partial<PutArticleRequest> = {}){
        Object.assign(this, request);
    };
}