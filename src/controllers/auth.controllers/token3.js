const ENGINE_DB = process.env.ENGINE_DB;

const getProperties = () => {
    const data = {
        postgresSQL:{
            id:'_id'
        },
        postgres:{
            id:'id'
        }
    }
    return data[ENGINE_DB]
}
export default getProperties