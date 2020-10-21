import { Injectable } from "@angular/core";
import { URLSearchParams, Jsonp } from "@angular/http";

@Injectable()
export class ObservablesService {
    constructor(private jsonp: Jsonp) { }
    searchService(term: string) {
        var search = new URLSearchParams();
        search.set("action", "opensearch");
        search.set("search", term);
        search.set("format", "json");

        return this.jsonp
            .get("https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK", {search})
            .toPromise()
            .then((request) => request.json()[1]);
    }
}