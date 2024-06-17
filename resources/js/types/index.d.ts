export interface Member {
    id: number
    last_name: string
    first_name: string
    last_name_kana: string
    first_name_kana: string
    tel: string
    birthday: Date
    other: string
    email: string
    is_admin: number
    email_verified_at: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        member: Member
    }
}
