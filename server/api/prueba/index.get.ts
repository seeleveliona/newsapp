export default defineEventHandler(async (event) => {

    const prueba = await $fetch('https://672dfb14fd89797156448664.mockapi.io/prueba/tittlex');
    return prueba
})