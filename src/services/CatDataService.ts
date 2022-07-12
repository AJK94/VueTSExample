import http from "../http-common";

/* eslint-disable */
class CatDataService {
    getAllBreeds(): Promise<any> {
        return http.get("/breeds");
    }

    get(breed: string): Promise<any> {
        return http.get(`/breeds/search?q=${breed}`);
    }
    getImages(breed: string): Promise<any> {
        return http.get(`/images/search?breed_id=${breed}&limit=5&order=random`);
    }
}

export default new CatDataService();