export declare type ExecResultInterface = {
    columns: string[];
    values: any[];
};
export declare type ParamsInterface = any[] | {
    [key: string]: any;
};
export interface ConnectionOptions {
    vfs?: string;
    mode?: 'ro' | 'rw' | 'rwc' | 'memory';
    cache?: 'shared' | 'private';
    psow?: boolean;
    nolock?: boolean;
    immutable?: boolean;
    salt?: string;
    header?: unknown;
    kdf?: string;
    skip?: unknown;
    page_size?: unknown;
    key: string;
}