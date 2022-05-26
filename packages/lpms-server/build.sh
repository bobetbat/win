set -e

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
docker -v

docker build --platform=linux/x86_64 \
      --progress=plain \
      -t windingtree/lpms-server:$LPMS_SERVER_TAG \
    .

# CLIENT_URL=$CLIENT_URL --build-arg APP_ACCESS_TOKEN_KEY=$APP_ACCESS_TOKEN_KEY --build-arg APP_REFRESH_TOKEN_KEY=$APP_REFRESH_TOKEN_KEY

# platform: linux/amd64
