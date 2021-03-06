#!/bin/sh
echo "Saving old profile"
export OLD_AWS_PROFILE=`echo $AWS_DEFAULT_PROFILE`
echo "Setting profile"
export AWS_DEFAULT_PROFILE=default
echo "Copy files from extensions $1 to s3://dev-cms-24orebs-website-static/$2"
aws s3 sync --region eu-central-1 extensions/$1 "s3://dev-cms-24orebs-website-static/$2" --include "*" --acl public-read
#echo "Setting permissions..."
#aws s3 ls "s3://dev-cms-24orebs-website-static" | awk '{print $4}' | while read in; do aws s3api put-object-acl --acl public-read --bucket "dev-cms-24orebs-website-static" --key "$in"; echo Updated permission for "$in";  done
echo "Done."
