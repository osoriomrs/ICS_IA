# Respuesta Ejercicio 1:
-Se debe pasar [] como argumento de useEffect
# Respuesta Ejercicio 2:
-La variable externa usada es postId, por eso debe ir en la matriz de dependencias
# Respuesta Ejercicio 3:
-La limpieza cancela el setTimeout anterior usando clearTimeout,evitando peticiones necesarias mientras se esribe
# Respuesta Ejercicio 4:
-En el useEffect se controla el ciclo completo, poner isLoading a true, hacer la petición, capturar errores, y actualizar estados
# Respuesta Ejercicio 5:
-Sin useCallBack, la función addPost se volvería a crear en cada render, y el useEffect que depende de ella se ejecutaría siempre,pero no debería