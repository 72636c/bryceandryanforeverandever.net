# bryceandryanforeverandever.net

[![Build Status](https://cloud.drone.io/api/badges/72636c/bryceandryanforeverandever.net/status.svg)](https://cloud.drone.io/72636c/bryceandryanforeverandever.net)

The award-winning website, now in version control!

## Setup

This repository presumes prior domain registration via the Route53 Registrar in the AWS Console.

The resulting hosted zone ID is retrieved via script and hardcoded in [stratus.yaml](stratus.yaml):

```shell
scripts/get-hosted-zone-id.sh
```

## Deployment

### Test

```shell
AWS_REGION=us-east-1 ENVIRONMENT=test stratus deploy

aws s3 sync --delete naked-bucket s3://test.bryceandryanforeverandever.net
aws s3 sync --delete www-bucket s3://www.test.bryceandryanforeverandever.net
```

### Prod

```shell
AWS_REGION=us-east-1 ENVIRONMENT=prod stratus deploy

aws s3 sync --delete naked-bucket s3://bryceandryanforeverandever.net
aws s3 sync --delete www-bucket s3://www.bryceandryanforeverandever.net
```
