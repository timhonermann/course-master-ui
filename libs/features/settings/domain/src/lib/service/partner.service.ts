import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner, PartnerCreation } from '@course-master/features/settings/model';

const RESOURCE_URL = '/api/v1/partners';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  readonly #http = inject(HttpClient);

  getAll(): Observable<Partner[]> {
    return this.#http.get<Partner[]>(RESOURCE_URL);
  }

  create(partnerCreation: PartnerCreation): Observable<Partner> {
    return this.#http.post<Partner>(RESOURCE_URL, partnerCreation);
  }
}
