export interface User {
    accessToken?: string;
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    isAnonymous: false;
    phoneNumber: null
    photoURL?: string;
    uid?: string;
}

export interface userFormData {
    uid?: string;
    name: string;
    lastName: string;
    birthDate: Date;
    manager?: boolean;
}