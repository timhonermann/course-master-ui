import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Partner, PartnerCreation } from '@course-master/shared/partner/model';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api/v1/partners';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  readonly #http = inject(HttpClient);

  getAll(): Observable<Partner[]> {
    return this.#http.get<Partner[]>(RESOURCE_URL);
  }

  create(partnerCreation: PartnerCreation): Observable<Partner> {
    return this.#http.post<Partner>(RESOURCE_URL, partnerCreation);
  }

  delete(id: string): Observable<void> {
    const url = `${RESOURCE_URL}/${id}`;

    return this.#http.delete<void>(url);
  }
}
