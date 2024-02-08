# Modo desarrollo

Pasos para levantar el poryecto en modo de desarollo

1. Levantar la base de datos

```
docker compose up -d
```

2. Renombrar el .env.template por .env
3. Remplazar las variables de entorno
4. Ejecutar el comando `npm install`
5. Ejecutar el comando `npm run dev`

6. Comandos de prisma

```
npx prisma init
npx prisma migrate
npx prisma generate
```

7. Poblar la base de datos

```
localhost:3000/api/seed
```
