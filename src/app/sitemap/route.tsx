import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { join } from "path";

export async function GET(req:NextRequest) {
    
    const sitemapPath = join(process.cwd(), "src/app/sitemap/sitemap.xml");

    try {
        const sitemap = await fs.readFile(sitemapPath, "utf8");
        return new NextResponse(sitemap, {
            headers: {
                "Content-Type": "application/xml",
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse("Sitemap not found", { status: 404 });
    }
}