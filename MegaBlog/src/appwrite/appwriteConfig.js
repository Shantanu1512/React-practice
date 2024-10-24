import config from "../../config/config";

import { Client, Account, ID, Databases, Query, Storage } from "appwrite"; 

export class Service{
    client = new Client()
    account;
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status, userId}
            )
        } catch (error) {
            console.log("Error in createPost method", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status}
            )
        } catch (error) {
            console.log("Error in updatePost method", error);
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error in deltePost", error)
        }
    }
}

const service = new Service()
export default service