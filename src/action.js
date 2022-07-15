export const add=(value)=>async dispatch=>
{
    dispatch({
        type:"add",
        payload:value
    })
}
export const remove=(value)=>async dispatch=>
{
    dispatch({
        type:"remove",
        payload:{name:value}
    })
}