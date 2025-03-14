import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Client, ClientCreation } from '@course-master/features/settings/model';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api/v1/clients';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  readonly #http = inject(HttpClient);

  getAll(): Observable<Client[]> {
    return this.#http.get<Client[]>(RESOURCE_URL);
  }

  create(clientCreation: ClientCreation): Observable<Client> {
    return this.#http.post<Client>(RESOURCE_URL, clientCreation);
  }
}
