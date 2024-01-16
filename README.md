# kaiwanyawit-chawankul.github.io
This is my personal website

## To run it locally
```
lhci autorun
```

## To check the website in github pages(run by CI)
```
lhci autorun --config lighthouserc.build.js
```

## To install light-server
```
npm install -g light-server
```

## To run the web for local dev
```
npm run start
```

## Optimize the images by using [imageOptimizer.js](https://github.com/toddhgardner/perf-training-website)

```
npm run imagemin
```

## To get the shar for the scripts
```
cat ./assets/js/index.js | openssl dgst -sha384 -binary | openssl base64 -A
cat ./assets/mui-0.10.3/js/mui.min.js | openssl dgst -sha384 -binary | openssl base64 -A

#or

shasum -b -a 384 ./assets/js/index.js | awk '{ print $1 }' | xxd -r -p | base64
shasum -b -a 384 ./assets/mui-0.10.3/js/mui.min.js | awk '{ print $1 }' | xxd -r -p | base64
```
