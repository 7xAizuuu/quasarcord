export enum ReviewType {
    User = 0,
    Server = 1,
    Support = 2
}

export enum UserType {
    Whitelisted = 0,
    Normal = 1,
    Admin = 2
}

export interface Review {
    id: number;
    comment: string;
    star: number;
    sender: {
        discordID: string;
        username: string;
        profilePhoto: string;
        clientMod: string;
        badges: any[];
        type: UserType;
    };
    timestamp: number;
    replies?: Review[];
}
