# CloudFront Functions

CloudFront functions limit what you can do, but they offer much higher throughput. You only have [a limited subset of JavaScript][cfjs] (e.g. it's not a full runtime like Lambda@Edge) and you can only do simple things like modify headers and create redirects.

(And by limited, let me tell you about the time I took down production because I tried to use a `const` instead of `var`.)

[cfjs]: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#writing-functions-javascript-features-builtin-modules

Some fun things to think about when choosing between Lambda@Edge and CloudFront functions:

- CloudFront functions are tuned for performance but at the cost of flexibility.
- They can't pull in dependencies or talk to external services.
- They only have access to a very limited subset of JavaScript.
- You can't mix and match them with Lambda@Edge functions.

## Example: Rewriting a URL

```js
function handler(event) {
  var request = event.request;
  if (request.uri === '/beatles.jpg') {
    request.uri = '/not-beatles.jpg';
  }

  return request;
}
```

## Example: Add a CORS Header

```js
function handler(event) {
  var request = event.request;
  var headers = request.headers;
  var host = request.headers.host.value;

  if (!headers.origin) headers.origin = { value: `https://${host}` };

  return request;
}
```
