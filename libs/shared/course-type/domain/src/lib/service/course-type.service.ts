import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CourseType,
  CourseTypeCreation,
} from '@course-master/shared/course-type/model';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api/v1/course-types';

@Injectable({
  providedIn: 'root',
})
export class CourseTypeService {
  readonly #http = inject(HttpClient);

  getAll(): Observable<CourseType[]> {
    return this.#http.get<CourseType[]>(RESOURCE_URL);
  }

  create(courseTypeCreation: CourseTypeCreation): Observable<CourseType> {
    return this.#http.post<CourseType>(RESOURCE_URL, courseTypeCreation);
  }

  delete(id: string): Observable<void> {
    const url = `${RESOURCE_URL}/${id}`;

    return this.#http.delete<void>(url);
  }
}
