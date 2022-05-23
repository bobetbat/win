set -e

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

docker build --platform=linux/amd64 \
    --build-arg CLIENT_URL=$CLIENT_URL \
    --build-arg APP_ACCESS_TOKEN_KEY=$APP_ACCESS_TOKEN_KEY \
    --build-arg APP_REFRESH_TOKEN_KEY=$APP_REFRESH_TOKEN_KEY \
    -t windingtree/lpms-server \
    .

# CLIENT_URL=$CLIENT_URL --build-arg APP_ACCESS_TOKEN_KEY=$APP_ACCESS_TOKEN_KEY --build-arg APP_REFRESH_TOKEN_KEY=$APP_REFRESH_TOKEN_KEY

# platform: linux/amd64
