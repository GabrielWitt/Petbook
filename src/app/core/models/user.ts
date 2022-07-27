export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
    emailVerified: boolean;
 }

export interface userFormData {
    uid?: string;
    photo?: string;
    email:string;
    name: string;
    lastName: string;
    birthDate: Date;
    manager?: boolean;
}

export interface shortUser {
    uid?: string;
    photo?: string;
    email:string;
    name: string;
}