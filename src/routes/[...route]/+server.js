import {readFile, writeFile} from 'fs/promises'
import {existsSync} from 'fs'

export async function POST(event) {

    console.log("POST", event)

    const body = await event.request.json()

    const page = body.page.slot;
    const route = event.params.route;


    const pagesFile = await readFile('./pages.json', 'utf-8')

    const pages = JSON.parse(pagesFile);

    pages[route] = page;
  
    await writeFile('./pages.json', JSON.stringify(pages))

    
    return new Response(JSON.stringify({page}))
}