import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class RestApiService {
    // Define API
    apiURL = 'https://search-domain-xtczppjjd26xzzhkwyj6gl2tx4.ap-southeast-1.es.amazonaws.com/';
    constructor(private http: HttpClient) { }
    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('admin:Caolenguyencln@1')
        }),
    };
    // HttpClient API get() method => Fetch employees list
    postItemOnboarding(nameIndex, data) {
        console.log(data, typeof data);
        return this.http.post(
            this.apiURL + nameIndex + "/_bulk",
            data,
            {
                headers: this.httpOptions.headers,
            }
        ).pipe(retry(1), catchError(this.handleError));
    }

    // getAllItems(nameTable) {
    //     let searchParams = new HttpParams();
    //     searchParams = searchParams.append('table', nameTable);
    //     return this.http.get(
    //         this.apiURL + '/getAllItems',
    //         {
    //             headers: this.httpOptions.headers,
    //             params: searchParams,
    //         }
    //     ).pipe(retry(1), catchError(this.handleError));
    // }

    // getItem(nameTable, itemId) {
    //     let searchParams = new HttpParams();
    //     searchParams = searchParams.append('table', nameTable);
    //     searchParams = searchParams.append('itemId', itemId);
    //     return this.http.get(
    //         this.apiURL + '/getItem',
    //         {
    //             headers: this.httpOptions.headers,
    //             params: searchParams,
    //         }
    //     ).pipe(retry(1), catchError(this.handleError));
    // }

    // updateItem(nameTable, item) {
    //     let searchParams = new HttpParams();
    //     searchParams = searchParams.append('table', nameTable);
    //     return this.http.put(
    //         this.apiURL + '/updateItem',
    //         item,
    //         {
    //             headers: this.httpOptions.headers,
    //             params: searchParams,
    //         }
    //     ).pipe(retry(1), catchError(this.handleError));
    // }


    // Error handling
    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}