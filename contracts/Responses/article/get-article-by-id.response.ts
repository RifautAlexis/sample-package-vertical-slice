export interface GetArticleByIdResponse {
    id: string;
    title: String;
    description: String;
    authorName: String;
    createdAt: Date;
    updatedAt: Date;
    content: String;
}