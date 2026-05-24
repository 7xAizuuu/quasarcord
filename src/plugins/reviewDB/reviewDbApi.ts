export const REVIEWS_PER_PAGE = 50;

export interface UserReviewsData {
    reviews: any[];
    reviewCount: number;
    hasNextPage: boolean;
}

export async function getReviews(id: string, offset = 0): Promise<UserReviewsData> {
    return { reviews: [], reviewCount: 0, hasNextPage: false };
}

export async function getCurrentUserInfo(token: string): Promise<any> {
    return null;
}

export async function readNotification(token: string): Promise<void> {}
