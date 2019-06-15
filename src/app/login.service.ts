import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(true);

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

 get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
login(username, password) {
  if ( username !== '' && password !== '') {
    return this.afAuth.auth.signInWithEmailAndPassword(username, password).then(authState => {
      console.log('Login-then' , authState );
      this.loggedIn.next(true);
      this.router.navigate(['/list']);
    })
    .catch(
      error => {
        this.router.navigate(['login/' + error.message]);
        console.log(error);
      }
    );
    }
}
}
