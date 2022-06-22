<h1 align="center">
   <b> ⚙️ Consejo de Facultad</b> 
</h1>
<p align="center">Proyecto académico para Ingeniería de Software I</p>


## 🐳 Docker-way to quick start

Primero, instala [docker](https://docs.docker.com/engine/install/) 
 
Después clone el proyecto

```bash
git clone git@github.com:Sebas03446/consejo-de-facultad.git
```
Construya la imagen de docker del proyecto

```bash
docker build . -t scf/node-web-app
```
Ejecute la imagen

```bash
docker run -p 49160:3001 -d scf/node-web-app
```
>Si quiere acceder a los endpoint debe acceder al puerto localhost:49160/ 

## Sin Docker
 Si quiere realizar la instalación sin docker, debe instalar node version > 14.16.7 después ejecutar los siguientes comandos.

Instala librerias
```bash
npm i
```
Ejecuta el server
```bash
npm start
```
## Diagrama de dependencias
<img src="./arkit.svg">