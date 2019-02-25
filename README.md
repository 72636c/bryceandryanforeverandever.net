# bryceandryanforeverandever.net

[![Build Status](https://cloud.drone.io/api/badges/72636c/bryceandryanforeverandever.net/status.svg)](https://cloud.drone.io/72636c/bryceandryanforeverandever.net)

The award-winning website, now in version control!

## Setup

```shell
scripts/request-certificates.sh
```

## Deployment

### Test

```shell
AWS_REGION=us-east-1 ENVIRONMENT=test stratus deploy

aws s3 sync naked-bucket s3://test.bryceandryanforeverandever.net
aws s3 sync www-bucket s3://www.test.bryceandryanforeverandever.net
```

### Prod

```shell
AWS_REGION=us-east-1 ENVIRONMENT=prod stratus deploy

aws s3 sync naked-bucket s3://bryceandryanforeverandever.net
aws s3 sync www-bucket s3://www.bryceandryanforeverandever.net
```
