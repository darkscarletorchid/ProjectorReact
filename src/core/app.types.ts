export interface Note  {
    id: number;
    isHtmlContent: boolean;
    title: string;
    content: string;
}

export enum Mode {
    None,
    View,
    Create,
    Edit
}