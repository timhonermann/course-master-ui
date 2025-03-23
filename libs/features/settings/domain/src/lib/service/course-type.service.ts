import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CourseType,
  CourseTypeCreation,
} from '@course-master/features/settings/model';

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
}
