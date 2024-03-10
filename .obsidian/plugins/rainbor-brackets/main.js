const obsidian = require('obsidian');

class MetaBindEmbedConverter extends obsidian.Plugin {
    async onload() {
        this.registerEvent(this.app.workspace.on('file-open', this.handleFileOpen.bind(this)));
    }

    async handleFileOpen(file) {
        const editor = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)?.editor;
        if (!editor) return;
        
        const doc = editor.getDoc();
        const text = doc.getValue();

        // Regular expression to find instances of &[[Some File]]
        const linkRegex = /&\[\[(.*?)\]\]/g;
        let match;
        while ((match = linkRegex.exec(text)) !== null) {
            const originalText = match[0];
            const fileName = match[1];
            const replacementText = `\`\`\`meta-bind-embed\n[[${fileName}]]\n\`\`\``;
            const startIndex = match.index;
            const endIndex = startIndex + originalText.length;

            // Replace the text in the editor
            doc.replaceRange(replacementText, doc.posFromIndex(startIndex), doc.posFromIndex(endIndex));
        }

        // Trigger the markdown renderer
        this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)?.previewMode?.rerender();
    }
}

module.exports = MetaBindEmbedConverter;
