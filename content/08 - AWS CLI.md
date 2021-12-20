# The AWS CLI

You can get the AWS CLI [here](https://aws.amazon.com/cli/).

You can set up the AWS CLI by running `aws configure`.

![configure-cli.png](Attachments/configure-cli.png)

## Using multiple accounts

If you have more than one AWS account, you can create additional profiles in `.aws/credentials`. You'll have your default profile in there, but you can create additional ones as well.

```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMxIbNOTREAL

[sideproject]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbTOTALLYFAKE
```

## Listing the contents of a bucket

We can use `aws s3 ls` to list the contents of a given bucket.

```
aws s3 ls s3://superawesome.xyz
```

## Deploying an entire directory to S3

```
aws s3 cp dist/ s3://mysuperfunwebsite.com/ --recursive
```

%%**TODO**: Pick an application to deploy… ideally one with client-side routing. You might to whip up a new one.%%
