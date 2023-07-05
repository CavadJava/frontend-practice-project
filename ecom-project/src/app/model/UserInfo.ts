export class UserInfo {
    email: string | undefined
    branch: string | undefined
    fullName: string | undefined
    role: UserRole | undefined
}

export class UserRole {
    id: number | undefined
    description: string | undefined
}