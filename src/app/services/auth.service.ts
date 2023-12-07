import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private Auth:Auth) { }

  loginUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.Auth, email, password)
   }

   signUpUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.Auth, email, password)
  }

  recoverPassword(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.Auth, passwordResetEmail)
  }

  logout() {
    return this.Auth.signOut()
  }
  getUser(): any {
    return getAuth().currentUser;
 }
}
