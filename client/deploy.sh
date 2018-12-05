rm -rf build
yarn
tsc
npm run build
echo 'Deploying static site to S3 bucket:' $1
aws s3 rm s3://$1 --recursive
aws s3 sync --acl public-read-write ./build s3://$1
#historyaws cloudfront create-invalidation --distribution-id $2
echo 'Done!'