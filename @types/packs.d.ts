namespace Packs {
  export interface Pack {
    _id: string;
    name: string;
    image?: string;
    version?: string;
    description?: string;
    words: string[];
    createdAt?: Date;
    updatedAt?: Date;
    language: string;
  }
}