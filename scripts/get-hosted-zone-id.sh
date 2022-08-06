#!/usr/bin/env sh

hosted_zone_id="$(
  aws route53 list-hosted-zones-by-name \
  --dns-name 'bryceandryanforeverandever.net.' \
  --output 'text' \
  --query 'HostedZones[0].Id' \
  --region 'us-east-1'
)"

echo 'Hosted zone ID:'
echo "${hosted_zone_id}"
