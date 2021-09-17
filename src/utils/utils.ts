export default class Utils {
    getId(url: string){
        const substr = url.substring(0, url.length - 1); 
        return substr.substring(substr.lastIndexOf('/') + 1);
    }
}