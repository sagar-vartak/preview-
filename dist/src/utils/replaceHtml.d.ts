export declare function rerunScriptsInDocument(): void;
export declare function updateDocumentBody(document: Document, receivedHTML: string, options: {
    shouldReRunScripts: boolean;
    onPostOperation: () => void;
}): Promise<void>;
export declare function replaceDocumentBody(newBody: string, onPostOperation?: () => void): void;
//# sourceMappingURL=replaceHtml.d.ts.map