# connect-prism

this repo is forked from [https://github.com/seglo/connect-prism](https://github.com/seglo/connect-prism), refer to it for documentation and information on setup.

### Setup
```javascript
  prism.create({
      name: name,
      context: '/api',
      host: 'localhost',
      mode: mode,
      mocksPath: './test/mocks',
      port: targets.backend.port,
      hashFullRequest: true,
      mockFilenameGenerator: customMockFilename,
      clearOnStart: true
  });
```

### Custom namegenerator
```javascript
function customMockFilename(config, req, status) {
    var maxLength = 255;

    var fileName = req.url.replace(/\/|\_|\?|\<|\>|\\|\:|\*|\||\"/g,'_');
    fileName += '_' + req.method + '_' + status + '_';
    var payload = JSON.stringify(req.body);

    var shasum = crypto.createHash('sha1');
    shasum.update(fileName + payload);
    var hash = shasum.digest('hex');

    return fileName.substring(0, maxLength - hash.length) + hash + '.json';
}
```
