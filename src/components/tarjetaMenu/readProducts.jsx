import { useState, useEffect } from "react"
import TarjetaMenu from "./tarjeta_menu"

const Products = ({url}) => {

    const [menuData, setMenuData] = useState({}); // Alamacenará los datos completos del menú 
    const [loading, setLoading] = useState(true); // loading Indica si los datos se están cargando
    const [error,setError] = useState(null); // error Almacena cualquier mensaje de error que ocurra
    
    useEffect(() =>{
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setMenuData(data.menu); // Accedemos a data.menu
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // El finally asegura que loading se cambie a false siempre
            }
        };
        fetchProducts();
    }, [url]);

    /*
        Muestra mensajes según el estado de carga
        Previene errores si los datos no están disponibles
     */

    if (loading) return <div>Cargando productos...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!menuData.comidas) return <div>No hay datos disponibles</div>;


    /* 
        Combina todos los productos de todas las categorías 
        en un solo array
        Usa || [] como fallback si alguna categoría no existe
     */

    const allProducts = [
    ...(menuData.comidas || []),
    ...(menuData.bebidas || []),
    ...(menuData.postres || [])
    ];

return (
    <div>
        <h2>Comidas</h2>
        <div className="categoria">
            {menuData.comidas?.map(product => ( // ? Se usa la optional chaining para prevenir errores si menuData.comidas es null o undefined, Si la categoria no existe, no se renderiza
                <TarjetaMenu key={product.id} {...product} /> // key es el identificador unico requerido por react para listas, {... product} Spread operator que pasa todas las propiedades del producto como props 
            ))}
        </div>

        <h2>Bebidas</h2>
        <div className="categoria">
            {menuData.bebidas?.map(product => (
                <TarjetaMenu key={product.id} {...product} />
            ))}
        </div>

        <h2>Postres</h2>
        <div className="categoria">
            {menuData.postres?.map(product => (
                <TarjetaMenu key={product.id} {...product} />
            ))}
        </div>
    </div>
);
}

export default Products;