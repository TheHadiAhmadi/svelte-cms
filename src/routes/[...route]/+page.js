// async function attachComponent(item) {
//     if(typeof item === 'string') return item;

//     item.component = await import(`../../lib/components/${item.type}.svelte`).then(res => res.default)

//     if(item.slot.length > 0) {
        
//         await Promise.all(item.slot.map(slot => attachComponent(slot)))
//     }
// }

export async function load({data}) {
    // await Promise.all(data.page.slot.map(item => attachComponent(item)))    

    /**
     * @type {any}
     */
    const components = {}

    components['Row'] = await import('$lib/components/Row.svelte').then(res => res.default);
    components['Col'] = await import('$lib/components/Col.svelte').then(res => res.default);
    
    for(let component of ['badge/Badge', 'el/El', 'button/Button', 'input/Input']) {
        const [folder, file] = component.split('/')
        components[component] = await import(`../../../node_modules/yesvelte/${folder}/${file}.svelte`).then(res => res.default)
    }
    // console.log(data)
    
    return {
        page: data.page,
        components
    }

}