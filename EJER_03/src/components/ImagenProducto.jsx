export default function ImagenProducto({ url, alt }) {
  return <img src={url} alt={alt} style={{ width: '100%', height: '200px' , borderRadius: '10px' }} />;
}

