import { useState, useEffect } from "react";
import TarjetaMenu from "./tarjeta_menu";

const Products = ({ url }) => {
  const [menuData, setMenuData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMenuData(data.menu);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!menuData.comidas) return <div>No hay datos disponibles</div>;

  return (
    <div>
      <h2 id="comidas" className="etiqueta-seccion">Comidas</h2>
      <div className="contenedor-productos">
        {menuData.comidas?.map((product) => (
          <TarjetaMenu key={product.id} {...product} />
        ))}
      </div>

      <h2 id="bebidas" className="etiqueta-seccion">Bebidas</h2>
      <div className="contenedor-productos">
        {menuData.bebidas?.map((product) => (
          <TarjetaMenu key={product.id} {...product} />
        ))}
      </div>

      <h2 id="postres" className="etiqueta-seccion">Postres</h2>
      <div className="contenedor-productos">
        {menuData.postres?.map((product) => (
          <TarjetaMenu key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
