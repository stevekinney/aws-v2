# Creating a Custom Cache Policy

Let's say that you want to have different caching settings for different types of files in your CloudFront distribution. That's totally something that you can do. By default, CloudFront is going to notice that you're using an S3 bucket and it'll set up some sensible defaults where it typically will cache assets for 24 hours.

We're mostly using invalidations to eject things from the cache, but if you have stuff that you know you want to have in the cache for a shorter or longer period of time, then you can create a cache policy.

In your Cloudfront distribution:

- Go to the **Behaviors** tab
- Add a new behavior
- Under **Cache key and origin requests**, create a new policy.
