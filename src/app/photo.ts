export interface Photo {
    id: string;
    url: string;
}
export class PhotoModel implements Photo {
    id: string;
    url: string;
    constructor(item?: Photo) {
        if (item != undefined) {
            for (let key in item) {
                try
                 { 
                     this[key] = item[key];
                 }
                catch (e) { }
            }
        }
    }
}