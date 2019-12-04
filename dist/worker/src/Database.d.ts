import { ConnectionOptions, ExecResultInterface, ParamsInterface } from './DatabaseInterface';
import { SQLite } from './Helper';
import { Statement } from './Statement';
export declare const whitelistedFunctions: string[];
export declare class Database {
    private databaseInstancePtr?;
    private idbfsMounted;
    private options?;
    private identifier?;
    private nodeDatabaseDir?;
    private static readonly metadataTableName;
    static readonly mountName = "/sqleet";
    private static readonly databaseExtension;
    statements: Record<number, Statement>;
    constructor();
    mount(options: ConnectionOptions, identifier?: string, nodeDatabaseDir?: string): Promise<void>;
    private static readonly getDatabasePath;
    private ensureFilesystemIsMounted;
    close(saveAfterClose?: boolean): Promise<void>;
    saveChanges(): Promise<void>;
    private sync;
    run(query: string, params?: ParamsInterface): Promise<void>;
    execute(query: string): Promise<ExecResultInterface[]>;
    prepare(query: string, params?: ParamsInterface): number;
    export(encoding?: 'binary' | 'utf8'): Promise<Uint8Array | string>;
    wipe(identifier: string): Promise<void>;
    getRowsModified(): Promise<number>;
    private ensureDatabaseIsOpen;
    handleError(returnCode: SQLite): void;
}