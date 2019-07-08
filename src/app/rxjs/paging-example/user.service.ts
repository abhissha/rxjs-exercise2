import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { User } from "./user.model";
import { map, shareReplay, switchMap, distinctUntilChanged, scan } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
  })
export class UserService {
}