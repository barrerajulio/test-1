#!/bin/bash
CREDENTIALS="
[default]
aws_access_key_id = ${AWS_ACCESS_KEY}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
"
mkdir ~/.aws/
echo "$CREDENTIALS" > ~/.aws/credentials
