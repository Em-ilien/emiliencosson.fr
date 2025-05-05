// src/routes/api/static-index/+server.ts
import fs from 'fs';
import path from 'path';
import type { PageServerLoad } from './$types';

function walkDir(dir: string, baseUrl: string) {

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    return entries.map((entry) => {
        const fullPath = path.join(dir, entry.name);
        const urlPath = path.join(baseUrl, entry.name).replace(/\\/g, '/');


        if (entry.isDirectory()) {
            return {
                type: 'folder',
                name: entry.name,
                path: '/' + urlPath,
                children: walkDir(fullPath, urlPath)
            };
        } else {
            return {
                type: 'file',
                name: entry.name,
                path: '/' + urlPath
            };
        }
    });
}

export const load: PageServerLoad = ({ params }) => {
    const slug = "images/" + params.slug;

    const staticDir = path.resolve('static/' + slug);
    const tree = walkDir(staticDir, slug);

    return { tree }
};
