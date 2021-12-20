# Routing

## Fixing client-side routing

So, we have a problem where if we visit the initial page everything works and client-side routing takes over. But, if we go directly to a client-side route, then we end up with an ugly error page.

One way that we can handle this is to go back into our S3 bucket and make the error page point to the entry point of our application.

Under **Static website hosting** set the **Error document** to `index.html`.

Now, this kind of works, but it has a number of problems:

- It works, but the browser stiill thinks it's a 404.
- It also "works" for actually invalid routes.

The latter we can solve with our client-side routing, but it's still not great for that first reason.

## Add support for a `www` subdomain

What if we want to support `www.superawesome.xyz` in addition to `superawesome.xyz`? We have a bunch of options, but we'll start with our current infrastructure. Under the **Static website hosting** options there is the ability to redirect requests to another bucket. That could be helpful.

- Go back to S3 and set up a new bucket.
- Roll with all the defaults.
- In **Static website hosting**, select **Redirect requests** and redirect it to your main bucket.
- Switch over to Route 53.
- Head back into **Registered domains**.
- Click **Create records** again.
- We'll set an alias with `www`.
