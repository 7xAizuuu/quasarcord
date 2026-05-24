export interface ScheduledAttachment {
    id: string;
    filename: string;
    url: string;
}

export interface ScheduledReaction {
    emoji: { id: string | null; name: string; animated?: boolean; };
}

export interface PhantomMessageData {
    channelId: string;
    messageId: string;
}

export interface ScheduledMessage {
    id: string;
    channelId: string;
    content: string;
    scheduledTime: number;
    attachments: ScheduledAttachment[];
    reactions: ScheduledReaction[];
}

export interface FluxReactionEvent {
    messageId: string;
    channelId: string;
    emoji: { id: string | null; name: string; animated?: boolean; };
}
