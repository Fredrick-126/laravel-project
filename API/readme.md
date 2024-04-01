1. Copy .env.example and Rename .env
2. Set your database credentials
3. Set your client secret
4. Set your client id
5. Set your jwt secret
6. composer update
7. php artisan migrate --seed (if you forget to seed the permissions will throw an error)
8. php artisan config:cache (just to make sure)
9. php artisan passport:install (copy one of the keys then and use as client secret on the client)
