import React from "react"

const Context=React.createContext()

function ContextProvider({children}){
    const [allPhotos,setAllPhotos] = React.useState([])
    const [cartItems,setCartItems] = React.useState([])
    
    const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    React.useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))

    }, [])

    function addToCart(img){
        setCartItems(prevData=>[...prevData,img])

    }
    function removeFromCart(id){
        setCartItems(prevItem => prevItem.filter(item=> item.id !== id))
    }
    function emptyCart(){
        setCartItems([])

    }

    function toggleFavorite(id){
        

        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setAllPhotos(updatedArr)

    }

    return(
        <Context.Provider value={{allPhotos,toggleFavorite,addToCart,cartItems,removeFromCart,emptyCart}}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}