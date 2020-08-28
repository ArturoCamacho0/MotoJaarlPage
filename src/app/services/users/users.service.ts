import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private angularFireAuth: AngularFireAuth){}

  createUser(user: string, password: string): Promise<any>{
    return this.angularFireAuth.createUserWithEmailAndPassword(user, password);
  }

  loginUser(user: string, password: string): Promise<any>{
    return this.angularFireAuth.signInWithEmailAndPassword(user, password);
  }

  logout(): Promise<any>{
    return this.angularFireAuth.signOut();
  }

  hasUser(): Observable<any>{
    return this.angularFireAuth.authState;
  }
}
