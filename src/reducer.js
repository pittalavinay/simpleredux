const initial=[]
export default function reducer(state=initial,action)
{
    const{type,payload}=action;
    switch(type)
    {
        case "add":
         return   [...state,payload];
            case "remove":
               return  state.filter(product=>product.name!==payload.name)
                default:
                    return state;
    }
}