# Using OAI

## Origin Access Identity

OAI let's you have a closed bucket, but still allow CloudFront to serve it.

This is a feature that you can turn on when setting an origin as an S3 bucket on a CloudFront distribution.

### Adding a policy to your bucket

If AWS fails at updating your bucket policy on your behalf, you can do it yourself.

![thanos-do-it-myself.png](Attachments/thanos-do-it-myself.png)

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Sid": "AllowCloudFrontServicePrincipalReadOnly",
        "Effect": "Allow",
        "Principal": {
            "Service": "cloudfront.amazonaws.com"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::<Bucket-Name>/*",
        "Condition": {
            "StringEquals": {
                "AWS:SourceArn": "arn:aws:cloudfront::<AWS-Account-ID>:distribution/<CloudFront-Distribution-ID>"
            }
        }
    }
}
```

If you're seeing an access denied error make sure to go into your distribution and settings and make sure that the **Default root object** is set correctly to `index.html`.

Also: make sure that **Origin object** is _not_ set in your origin settings.

### Additional resources

- [See all of your origin access identities](https://console.aws.amazon.com/cloudfront/v3/home#/oai)
- [Further reading](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
