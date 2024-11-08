export default defineEventHandler(async (event) => {

    const repo = await $fetch('https://672dfb14fd89797156448664.mockapi.io/prueba/tittlex');
    return repo
})