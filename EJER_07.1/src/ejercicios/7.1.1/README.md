# 1-Demuestra con console.log que los 6 niveles se ejecutan en cada clic:
ContadorPadre.jsx:19 ContadorPadre render
ContadorPadre.jsx:19 ContadorPadre render
ListaIntermedia.jsx:5 ListaIntermedia render
ListaIntermedia.jsx:5 ListaIntermedia render
TarjetaUsuario.jsx:5 TarjetaUsuario render id=1
TarjetaUsuario.jsx:5 TarjetaUsuario render id=1
Avatar.jsx:5 Avatar render
Avatar.jsx:5 Avatar render
IconoOnline.jsx:5 IconoOnline render
IconoOnline.jsx:5 IconoOnline render
PuntitoVerde.jsx:4 PuntitoVerde render
PuntitoVerde.jsx:4 PuntitoVerde render

# 2-Abrir Dev-Tools:
El Profiler muestra que en cada clic se vuelven a renderizar todos los componentes de los 500 usuarios

# 3-Tiempos de renderizado:
El tiempo de render aumenta rápidamente debido al gran número de componentes re-renderizados

# 4- ¿Se ve lento el navegador? ¿Cuántas funciones (console.log) se ejecutan en cada clic?
Sí, va lento porque se ejecutan más de 3.000 logs y renders por cada clic.

# 5- ¿Son todos los renderizados necesarios? ¿Por qué?
No, porque la lista de usuarios no ha cambiado y no debería volver a renderizarse



