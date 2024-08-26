# Recipe Challenge

Este proyecto es una aplicación web para gestionar recetas de cocina. Permite a los usuarios registrarse, iniciar sesión, agregar recetas, ver la lista de recetas, marcar recetas como favoritas y mucho más. La aplicación utiliza React, React Router, y Bootstrap para la interfaz de usuario, y maneja el estado con Context API.

## Características

- **Registro y Autenticación de Usuarios**: Los usuarios pueden registrarse y autenticarse. El acceso a ciertas rutas está protegido y solo disponible para usuarios autenticados.
- **Gestión de Recetas**: Los usuarios pueden agregar nuevas recetas, ver la lista de recetas, y ver los detalles de cada receta.
- **Favoritos**: Los usuarios pueden marcar recetas como favoritas.
- **Carrusel**: Un carrusel de imágenes está disponible en la página de inicio para los usuarios autenticados. Muestra imágenes relacionadas con las recetas.
- **Navegación Protegida**: Algunas rutas son accesibles solo para usuarios autenticados. Si un usuario no está autenticado, se le redirige a la página de inicio de sesión.

## Estructura del Proyecto

- **App.js**: Es el componente principal que maneja las rutas y envuelve la aplicación con los proveedores de contexto (AuthProvider y RecipeProvider).
- **NavbarComponent.js**: Contiene la barra de navegación que muestra opciones según el estado de autenticación del usuario. También maneja la lógica para mostrar el carrusel cuando se hace clic en "Mi APP de Recetas".
- **CarouselComponent.js**: Componente que muestra un carrusel de imágenes con un botón que redirige a la lista de recetas.
- **AuthProvider.js**: Maneja la autenticación de usuarios utilizando Context API.
- **RecipeProvider.js**: Maneja el estado de las recetas utilizando Context API.
- **Componentes de Recetas**: Varios componentes para manejar la visualización y gestión de recetas (RecipeForm, RecipeList, RecipeDetail, FavoriteRecipes).
Instala las dependencias:
bash
Copiar código
npm install
Inicia la aplicación:
bash
Copiar código
npm start
Uso
Visita http://localhost:3000 para ver la aplicación en el navegador.
Regístrate o inicia sesión para acceder a las funciones protegidas.
Haz clic en "Mi APP de Recetas" en la barra de navegación para ver el carrusel de imágenes.
Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm start
Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en tu navegador.

npm test
Lanza el corredor de pruebas en modo interactivo de vigilancia.
Consulta la sección sobre running tests para más información.

npm run build
Compila la aplicación para producción en la carpeta build.
La compila correctamente en modo de producción y optimiza la compilación para un mejor rendimiento.

npm run eject
Nota: Esta es una operación unidireccional. Una vez que eject, no puedes volver atrás!

Aprender Más
Puedes aprender más en la documentación de Create React App.

Para aprender React, consulta la documentación de React.

## Requisitos

- Node.js
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:Lautaro-Palacios/Challenge_recipe.git
