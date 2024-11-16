export default defineEventHandler(async (event) => {

    const News = await $fetch('https://6735fe935995834c8a94f577.mockapi.io/News');
    return News
})