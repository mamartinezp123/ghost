# Funcionalidades

## Publicaciones

- Crear publicacion: permite al usuario generar contenido nuevo en el CMS. Al utilizar esta herramienta, el usuario
  puede compartir ideas, pensamientos, opiniones o cualquier otro tipo de información relevante que desee comunicar a su
  audiencia en línea. Al crear un publicacion, el usuario puede agregar texto, imágenes, videos, enlaces y otros
  elementos multimedia para enriquecer el contenido y hacerlo más atractivo y completo.
- Modificar publicacion: permite al usuario editar y actualizar un contenido previamente publicado en el CMS. Al
  utilizar esta herramienta, el usuario puede corregir errores, agregar información adicional o actualizar el contenido
  para mantenerlo relevante y actualizado. Al modificar un publicacion, el usuario puede agregar o eliminar texto,
  imágenes, videos, enlaces y otros elementos multimedia, así como cambiar el formato, la tipografía y otros aspectos
  visuales para mejorar la calidad y la apariencia del contenido.
- Eliminar publicacion: permite al usuario eliminar un contenido previamente publicado en el CMS cuando ya no sea
  relevante.

## Paginas

- Crear pagina: Permite al usuario crear una página web personalizada en el CMS. Al utilizar esta herramienta, el
  usuario puede diseñar y personalizar una página que se adapte a sus necesidades, intereses y objetivos en línea. Al
  crear una página, el usuario puede agregar contenido multimedia, como texto, imágenes, videos, enlaces, formularios y
  otros elementos interactivos para hacer que la página sea más atractiva y funcional.
- Modificar pagina: Permite al usuario editar y actualizar una página web previamente creada en el CMS. Al utilizar esta
  herramienta, el usuario puede modificar el diseño, el contenido y los elementos multimedia de la página para
  mantenerla actualizada y relevante. Al modificar una página, el usuario puede agregar o eliminar secciones, cambiar la
  disposición y el diseño de los elementos, y actualizar el contenido, como el texto, las imágenes, los videos y otros
  elementos interactivos.
- Eliminar pagina: Permite al usuario eliminar una página web previamente creada en el CMS.

## Etiquetas

- Crear etiqueta: Permite al usuario asignar una etiqueta o palabra clave a un contenido específico en el CMS. Al
  utilizar esta herramienta, el usuario puede clasificar y organizar el contenido en la plataforma, lo que facilita la
  búsqueda y el acceso a la información por parte de la audiencia. Al crear un tag, el usuario puede agregar una palabra
  o frase que describa el contenido de manera precisa y concisa. Los tags suelen ser utilizados en combinación con otras
  funcionalidades, como la búsqueda o la categorización, para mejorar la accesibilidad y la navegación del contenido.
  Además, la funcionalidad de crear tag suele ofrecer opciones para crear tags personalizados, lo que permite al usuario
  crear etiquetas únicas y específicas para su contenido.
- Eliminar etiqueta: Permite al usuario eliminar una etiqueta o palabra clave previamente asignada a un contenido
  específico en el CMS. Al utilizar esta herramienta, el usuario puede deshacer una clasificación u organización del
  contenido en la plataforma, lo que puede ser útil en caso de que una etiqueta ya no sea relevante o si se cometió un
  error al asignarla.
- Modificar etiqueta: Permite al usuario editar y actualizar una etiqueta o palabra clave previamente asignada a un
  contenido específico en el CMS. Al utilizar esta herramienta, el usuario puede cambiar la descripción o el término
  utilizado para clasificar y organizar el contenido en la plataforma, lo que mejora la precisión y relevancia de la
  información para la audiencia. Al modificar un tag, el usuario puede cambiar la palabra o frase utilizada para
  describir el contenido, y así actualizar o mejorar la clasificación de este.

## Usuarios

- Modificar contraseña: Permite al usuario cambiar su contraseña para mantenerla segura.
- Cerrar sesion: Permite al usuario cerra sesion de forma segura para cuando termine su trabajo y nadie pueda acceder al
  sitio sin las credenciales adecuadas.
- Regenerar token de usuario: Permite regenerar el token al usuario para conceder acceso a la aplicacion sin la
  necesidad de conpartir sus credenciales de autenticación

# Escenarios de prueba

## Publicaciones

- Crear publicacion
- Eliminar publicacion
- Modificar publicacion

## Paginas

- Crear pagina
- Eliminar pagina
- Modificar pagina

## Etiquetas

- Crear etiqueta
- Eliminar etiqueta
- Modificar etiqueta

## Usuarios

- Cerrar sesion de usuario
- Regenerar token de usuario
- Modificar contraseña de usuario con contrasena insegura

# Como ejecutar las pruebas
## Prerequisitos
1. Haber ejecutado las pruebas Playwright tanto para la version 3.41.1 como para la version 4.44.0, con el fin de generar los pantallazos a comparar, luego de esto tomar los archivos y ubicarlos en el directorio indicado. Ejemplo: si ejecuto el escenario "Modificar contraseña de usuario con contrasena insegura" con Playwright se debieron haber generado los siguientes directorios y archivos.

![image](https://github.com/mamartinezp123/ghost/assets/124101154/7e1c1cca-ef5b-4c99-be22-ad50fc01af77)

Estos archivos deben ser ubicados en el directrio source del proyecto de regresion visual dependiendo de la configuracion del archivo config.json en el atributo feature

![image](https://github.com/mamartinezp123/ghost/assets/124101154/1c3c43c8-2abd-42a4-83b6-f91f4e919c09)

Quedando asi

![image](https://github.com/mamartinezp123/ghost/assets/124101154/bc616b47-676d-459c-8889-5549cd45a3aa)

3. Nodejs
4. Npm
5. Google Chrome
## A tener en cuenta
Debe actualizar las constantes usuario y contrasena en el archivo __*stepdef.js*__ en las lineas 36 y 37 respoectivamente, por credenciales validas que tenga en su ambiente local para acceder a Ghost.
Dependediendo de la version de ghost sobre la cual realizara las pruebas de regresión visual, debe actualizar la constante version por los valores 3.41.1 o 4.44.0, ya que dependiendo de esto se generara un directorio con los pantallazos de la version indicada.
## Pasos
1. Luego de descargar una copia del proyecto dirijase al directorio root del mismo y ubicar los pantallazos obtenidos en la ejecucion con Playwright en los directorios definidos en el archivo config.js de acuerdo a los prerequisitos.
2. Ingrese el comando __*npm install*__ para descargar las dependencias.
3. Ingrese el comando __*node index.js*__ para ejecutar los escenarios de pruebas.
4. Se generara un directorio report que contiene un archivo report.html que contiene el reporte de las pruebas de regresion visual.

![image](https://github.com/mamartinezp123/ghost/assets/124101154/13c3a7da-59e9-4f82-af21-afc35c8fa87d)

Hasta luego!
